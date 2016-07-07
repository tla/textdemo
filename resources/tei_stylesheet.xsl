<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:tei="http://www.tei-c.org/ns/1.0">

    <xsl:template match="tei:TEI">
        <html>
            <head>
                <title>My document</title>
            </head>
            <body>
              <xsl:apply-templates select="tei:text/tei:body/tei:ab"/>
            </body>
        </html>
    </xsl:template>


    <xsl:template match="tei:ab">
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="tei:abbr">
        <sup><xsl:apply-templates/></sup>
    </xsl:template>

    <xsl:template match="tei:lb">
        <br/>
    </xsl:template>

    <xsl:template match="tei:cb">
        <hr/>
    </xsl:template>

</xsl:stylesheet>
