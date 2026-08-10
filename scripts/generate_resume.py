"""Generate the public, privacy-safe one-page résumé PDF.

Requires: ``python -m pip install reportlab``
"""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.pdfdoc import PDFString
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Artur-Bytyqi-Lebenslauf.pdf"

FONT_REGULAR = "Helvetica"
FONT_BOLD = "Helvetica-Bold"
arial_regular = Path(r"C:\Windows\Fonts\arial.ttf")
arial_bold = Path(r"C:\Windows\Fonts\arialbd.ttf")
if arial_regular.exists() and arial_bold.exists():
    pdfmetrics.registerFont(TTFont("PortfolioSans", arial_regular))
    pdfmetrics.registerFont(TTFont("PortfolioSans-Bold", arial_bold))
    FONT_REGULAR = "PortfolioSans"
    FONT_BOLD = "PortfolioSans-Bold"

WIDTH, HEIGHT = A4
INK = colors.HexColor("#11110F")
PAPER = colors.HexColor("#F4F1EA")
MUTED = colors.HexColor("#66635D")
LINE = colors.HexColor("#D4D0C7")
ACCENT = colors.HexColor("#5966E9")
ACCENT_LIGHT = colors.HexColor("#D9DCFF")
WHITE = colors.white


def text_width(text: str, font: str, size: float) -> float:
    return pdfmetrics.stringWidth(text, font, size)


def wrap(text: str, font: str, size: float, max_width: float) -> list[str]:
    lines: list[str] = []
    current = ""
    for word in text.split():
        trial = word if not current else f"{current} {word}"
        if text_width(trial, font, size) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def build_pdf() -> None:
    document = canvas.Canvas(str(OUTPUT), pagesize=A4)
    document._doc.Catalog.Lang = PDFString("de-CH")
    document.setTitle("Artur Bytyqi — Lebenslauf")
    document.setAuthor("Artur Bytyqi")
    document.setSubject("Öffentlicher Lebenslauf")

    def draw_lines(
        text: str,
        x: float,
        y: float,
        max_width: float,
        *,
        font: str = FONT_REGULAR,
        size: float = 8,
        leading: float = 10,
        color=MUTED,
    ) -> float:
        document.setFont(font, size)
        document.setFillColor(color)
        for line in wrap(text, font, size, max_width):
            document.drawString(x, y, line)
            y -= leading
        return y

    def draw_section(label: str, x: float, y: float, max_width: float) -> float:
        document.setFillColor(ACCENT)
        document.setFont(FONT_BOLD, 7)
        document.drawString(x, y, label.upper())
        document.setStrokeColor(LINE)
        document.setLineWidth(0.4)
        document.line(x, y - 5, x + max_width, y - 5)
        return y - 18

    def draw_entry(
        period: str,
        title: str,
        body: str,
        x: float,
        y: float,
        max_width: float,
        tech: str | None = None,
    ) -> float:
        period_width = 72
        text_x = x + period_width
        text_area_width = max_width - period_width
        start_y = y

        document.setFillColor(MUTED)
        document.setFont(FONT_BOLD, 6.6)
        document.drawString(x, y, period)

        document.setFillColor(INK)
        document.setFont(FONT_BOLD, 9)
        text_y = y
        for line in wrap(title, FONT_BOLD, 9, text_area_width):
            document.drawString(text_x, text_y, line)
            text_y -= 10.5

        text_y -= 1.5
        text_y = draw_lines(
            body,
            text_x,
            text_y,
            text_area_width,
            size=7.3,
            leading=9.3,
        )

        if tech:
            text_y -= 1.5
            text_y = draw_lines(
                tech,
                text_x,
                text_y,
                text_area_width,
                font=FONT_BOLD,
                size=6.5,
                leading=8.2,
                color=INK,
            )

        bottom = min(text_y - 5, start_y - 25)
        document.setStrokeColor(LINE)
        document.setLineWidth(0.35)
        document.line(x, bottom + 1, x + max_width, bottom + 1)
        return bottom - 7

    def draw_side_entry(
        title: str, body: str, x: float, y: float, max_width: float
    ) -> float:
        document.setFillColor(INK)
        document.setFont(FONT_BOLD, 8.5)
        for line in wrap(title, FONT_BOLD, 8.5, max_width):
            document.drawString(x, y, line)
            y -= 10
        y -= 1
        y = draw_lines(body, x, y, max_width, size=7, leading=9)
        return y - 8

    def draw_bullets(
        items: list[str], x: float, y: float, max_width: float
    ) -> float:
        for item in items:
            document.setFillColor(ACCENT)
            document.circle(x + 2, y + 2, 1.2, stroke=0, fill=1)
            y = draw_lines(item, x + 9, y, max_width - 9, size=7, leading=9)
            y -= 4
        return y

    # Page and header
    document.setFillColor(PAPER)
    document.rect(0, 0, WIDTH, HEIGHT, stroke=0, fill=1)
    document.setFillColor(INK)
    document.rect(0, HEIGHT - 40 * mm, WIDTH, 40 * mm, stroke=0, fill=1)

    left = 15 * mm
    right = WIDTH - 15 * mm
    document.setFillColor(WHITE)
    document.setFont(FONT_BOLD, 28)
    document.drawString(left, HEIGHT - 18 * mm, "Artur Bytyqi")
    document.setFillColor(ACCENT_LIGHT)
    document.setFont(FONT_REGULAR, 9.5)
    document.drawString(
        left, HEIGHT - 25 * mm, "Applikationsentwickler in Ausbildung"
    )

    contact_lines = [
        ("Baden / Aargau · Schweiz", None),
        ("bytyqiartur00@gmail.com", "mailto:bytyqiartur00@gmail.com"),
        ("github.com/Artur001", "https://github.com/Artur001"),
        (
            "LinkedIn-Profil",
            "https://www.linkedin.com/in/artur-bytyqi-0982212a2",
        ),
    ]
    contact_y = HEIGHT - 15 * mm
    document.setFont(FONT_REGULAR, 7.2)
    for text, url in contact_lines:
        document.setFillColor(colors.HexColor("#D4D2CB") if not url else WHITE)
        document.drawRightString(right, contact_y, text)
        if url:
            line_width = text_width(text, FONT_REGULAR, 7.2)
            document.linkURL(
                url,
                (right - line_width, contact_y - 2, right, contact_y + 8),
                relative=0,
            )
        contact_y -= 10

    # Main and sidebar columns
    main_x = left
    main_width = 117 * mm
    side_x = main_x + main_width + 7 * mm
    side_width = right - side_x
    main_y = HEIGHT - 47 * mm
    side_y = main_y

    main_y = draw_lines(
        "Ich besuche die Informatikmittelschule Baden, entwickle Webapps und "
        "Python-Tools und suche für 2026/27 ein Praxisjahr in der "
        "Applikationsentwicklung.",
        main_x,
        main_y,
        main_width,
        size=9.2,
        leading=12.3,
        color=INK,
    )
    main_y -= 10

    main_y = draw_section("Ausbildung", main_x, main_y, main_width)
    main_y = draw_entry(
        "2022 — 2027",
        "Informatikmittelschule Baden / Berufsfachschule BBB",
        "Informatiker EFZ, Fachrichtung Applikationsentwicklung + Berufsmaturität "
        "Wirtschaft. Ausbildung noch laufend; Praxisjahr 2026/27 gesucht.",
        main_x,
        main_y,
        main_width,
    )

    main_y = draw_section("Projekte", main_x, main_y, main_width)
    main_y = draw_entry(
        "2026",
        "SolveLab",
        "Mathe-Webapp für Rechner, Graphen, Gleichungen, Statistik und weitere "
        "Schulmathematik-Werkzeuge. Responsive Navigation und getestete Rechenlogik.",
        main_x,
        main_y,
        main_width,
        "Next.js · React · TypeScript · MathJS · function-plot · KaTeX",
    )
    main_y = draw_entry(
        "2026",
        "TaxiShift",
        "Nach CS50x modernisierte Flask-/SQLite-App: Fahrten und Fahrer verwalten, "
        "suchen und filtern; abgesichert durch Migration, CSRF-Schutz und 22 Tests.",
        main_x,
        main_y,
        main_width,
        "Python · Flask · Jinja · SQLite · HTML/CSS",
    )
    main_y = draw_entry(
        "2026",
        "TempFileCleaner",
        "Konservatives Windows-CLI-Experiment: read-only Vorschau, exakter Dateiplan "
        "und handle-gebundene Löschung; 27 isolierte Sicherheitstests.",
        main_x,
        main_y,
        main_width,
        "Python · Windows API · Batch · PyInstaller",
    )

    main_y = draw_section("Berufserfahrung", main_x, main_y, main_width)
    main_y = draw_entry(
        "06/2024 — 01/2026",
        "Betreuungsdienst · Securitas AG",
        "Rapporte und Listen geführt, Telefondienst übernommen, Termine koordiniert "
        "sowie Empfangs- und Sicherheitsaufgaben ausgeführt.",
        main_x,
        main_y,
        main_width,
    )
    draw_entry(
        "12/2022 — 01/2023",
        "Aushilfe Food · Coop City Baden",
        "Warenbewirtschaftung, Regalpflege und Kundenkontakt.",
        main_x,
        main_y,
        main_width,
    )

    # Sidebar divider and availability callout
    document.setStrokeColor(LINE)
    document.setLineWidth(0.55)
    document.line(side_x - 3.5 * mm, 15 * mm, side_x - 3.5 * mm, HEIGHT - 46 * mm)

    callout_height = 28 * mm
    document.setFillColor(ACCENT)
    document.rect(
        side_x,
        side_y - callout_height + 5,
        side_width,
        callout_height,
        stroke=0,
        fill=1,
    )
    document.setFillColor(WHITE)
    document.setFont(FONT_BOLD, 13.5)
    document.drawString(side_x + 4 * mm, side_y - 5 * mm, "Praxisjahr")
    document.drawString(side_x + 4 * mm, side_y - 11 * mm, "2026/27")
    document.setFillColor(ACCENT_LIGHT)
    document.setFont(FONT_REGULAR, 7)
    for index, line in enumerate(
        wrap(
            "Gesucht: Applikationsentwicklung im Raum Aargau / Zürich.",
            FONT_REGULAR,
            7,
            side_width - 8 * mm,
        )
    ):
        document.drawString(side_x + 4 * mm, side_y - 18 * mm - index * 8, line)
    side_y -= callout_height + 7

    side_y = draw_section("Zertifikate", side_x, side_y, side_width)
    side_y = draw_side_entry(
        "Cambridge English C1", "Advanced · Score 192 · 2026", side_x, side_y, side_width
    )
    side_y = draw_side_entry(
        "DELF B1", "Französisch · 2026", side_x, side_y, side_width
    )
    side_y = draw_side_entry(
        "Harvard CS50x",
        "Introduction to Computer Science · 2026",
        side_x,
        side_y,
        side_width,
    )

    side_y = draw_section("Praktisch eingesetzt", side_x, side_y, side_width)
    side_y = draw_bullets(
        [
            "Next.js · React · TypeScript",
            "MathJS · function-plot · KaTeX",
            "Python · Flask · Jinja",
            "SQL · SQLite",
            "Git · GitHub · Vercel",
        ],
        side_x,
        side_y,
        side_width,
    )

    side_y = draw_section("Im Unterricht behandelt", side_x, side_y, side_width)
    side_y = draw_bullets(
        [
            "Testing",
            "Datenschutz",
            "Container-Grundlagen",
        ],
        side_x,
        side_y,
        side_width,
    )

    side_y = draw_section("Sprachen", side_x, side_y, side_width)
    draw_bullets(
        [
            "Deutsch · sehr gut",
            "Schweizerdeutsch · mündlich",
            "Englisch · C1 (Cambridge)",
            "Französisch · B1 (DELF)",
        ],
        side_x,
        side_y,
        side_width,
    )

    # Footer
    document.setStrokeColor(LINE)
    document.setLineWidth(0.4)
    document.line(left, 12 * mm, right, 12 * mm)
    document.setFillColor(MUTED)
    document.setFont(FONT_REGULAR, 6.4)
    document.drawString(
        left,
        7.5 * mm,
        "Stand Juli 2026 · Vollständige Bewerbungsunterlagen und Nachweise auf Anfrage.",
    )
    document.drawRightString(right, 7.5 * mm, "Portfolio · github.com/Artur001")

    document.showPage()
    document.save()


if __name__ == "__main__":
    build_pdf()
    print(f"Created {OUTPUT}")
