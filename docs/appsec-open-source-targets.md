# AppSec Open-Source Targets

These are practical contribution targets that align with application security, recruiter signal, and Tom's existing OpenSSF/OWASP work.

## Priority 1: OWASP ZAP

Repository: https://github.com/zaproxy/zaproxy

Best current target:

- Issue: https://github.com/zaproxy/zaproxy/issues/6617
- Title: Check file type for XSS
- Why it matters: ZAP is a widely recognised DAST tool. Improving XSS detection is direct application-security work and is easy to explain to recruiters.
- Trade-off: Java codebase and scanner internals may take longer to understand than a documentation or JavaScript contribution.

Other target:

- Issue: https://github.com/zaproxy/zaproxy/issues/6119
- Title: New common getExampleAlerts() method
- Why it matters: Less security-specific than XSS detection, but it can help improve scanner add-on maintainability.

## Priority 2: OWASP NodeGoat

Repository: https://github.com/OWASP/NodeGoat

Potential targets:

- Issue: https://github.com/OWASP/NodeGoat/issues/390
- Title: CWE-532: Full config object logged to stdout on startup
- Why it matters: Sensitive data exposure and insecure logging are real-world AppSec problems.

- Issue: https://github.com/OWASP/NodeGoat/issues/389
- Title: Second-order IDOR in benefits handler persists after A7 fix
- Why it matters: IDOR/BOLA is highly relevant to modern application and API security.

- Issue: https://github.com/OWASP/NodeGoat/issues/415
- Title: Security Scan: Vulnerabilities detected by ansede-static
- Why it matters: Could be useful if the project needs dependency or static-analysis cleanup.

Trade-off: NodeGoat is a deliberately vulnerable training app, so fixes must preserve the educational intent.

## Priority 3: OWASP Cheat Sheet Series

Repository: https://github.com/OWASP/CheatSheetSeries

Best current target:

- Issue: https://github.com/OWASP/CheatSheetSeries/issues/2219
- Title: Update: Insecure Direct Object Reference Prevention Cheat Sheet
- Why it matters: IDOR/BOLA guidance is highly relevant to AppSec and API security.
- Trade-off: This is writing/research rather than code, so it should be paired with a technical contribution.

## Priority 4: Semgrep Rules

Repository: https://github.com/semgrep/semgrep-rules

Potential targets:

- Issue: https://github.com/semgrep/semgrep-rules/issues/3824
- Title: Improve JavaScript Command Injection Detection for Parameter-Derived exec(...) Commands
- Why it matters: Strong AppSec + detection-engineering signal, and it connects directly to SAST rule writing.

- Issue: https://github.com/semgrep/semgrep-rules/issues/3873
- Title: TypeScript rules for mcp-command-injection and mcp-ssrf
- Why it matters: AI-security and AppSec crossover. This is especially aligned with Tom's AI/security interests.

Trade-off: Rule contributions need careful false-positive and false-negative testing.

## Recommendation

After the current OpenSSF Scorecard and OWASP Threat Dragon work, the strongest next AppSec contribution is OWASP ZAP issue `#6617`.

If speed matters more than depth, start with NodeGoat issue `#390`.
If AI-security positioning matters most, investigate Semgrep Rules issue `#3873`.

