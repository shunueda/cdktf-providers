// https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the report rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#description ReportRule#description}
  */
  readonly description?: string;
  /**
  * List of email alert channels for the report rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#email_alert_channels ReportRule#email_alert_channels}
  */
  readonly emailAlertChannels: string[];
  /**
  * The state of the report rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#enabled ReportRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#id ReportRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the report rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#name ReportRule#name}
  */
  readonly name: string;
  /**
  * List of resource groups for the report rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#resource_groups ReportRule#resource_groups}
  */
  readonly resourceGroups?: string[];
  /**
  * List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#severities ReportRule#severities}
  */
  readonly severities: string[];
  /**
  * Weekly Snapshot Compliance Report type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#weekly_snapshot ReportRule#weekly_snapshot}
  */
  readonly weeklySnapshot?: boolean | cdktf.IResolvable;
  /**
  * aws_compliance_reports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#aws_compliance_reports ReportRule#aws_compliance_reports}
  */
  readonly awsComplianceReports?: ReportRuleAwsComplianceReports;
  /**
  * azure_compliance_reports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#azure_compliance_reports ReportRule#azure_compliance_reports}
  */
  readonly azureComplianceReports?: ReportRuleAzureComplianceReports;
  /**
  * daily_compliance_reports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#daily_compliance_reports ReportRule#daily_compliance_reports}
  */
  readonly dailyComplianceReports?: ReportRuleDailyComplianceReports;
  /**
  * gcp_compliance_reports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#gcp_compliance_reports ReportRule#gcp_compliance_reports}
  */
  readonly gcpComplianceReports?: ReportRuleGcpComplianceReports;
}
export interface ReportRuleAwsComplianceReports {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#cis_s3 ReportRule#cis_s3}
  */
  readonly cisS3?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#hipaa ReportRule#hipaa}
  */
  readonly hipaa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#iso_2700 ReportRule#iso_2700}
  */
  readonly iso2700?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#nist_800_171_rev2 ReportRule#nist_800_171_rev2}
  */
  readonly nist800171Rev2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#nist_800_53_rev4 ReportRule#nist_800_53_rev4}
  */
  readonly nist80053Rev4?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#pci ReportRule#pci}
  */
  readonly pci?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#soc ReportRule#soc}
  */
  readonly soc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}
  */
  readonly socRev2?: boolean | cdktf.IResolvable;
}

export function reportRuleAwsComplianceReportsToTerraform(struct?: ReportRuleAwsComplianceReportsOutputReference | ReportRuleAwsComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cis_s3: cdktf.booleanToTerraform(struct!.cisS3),
    hipaa: cdktf.booleanToTerraform(struct!.hipaa),
    iso_2700: cdktf.booleanToTerraform(struct!.iso2700),
    nist_800_171_rev2: cdktf.booleanToTerraform(struct!.nist800171Rev2),
    nist_800_53_rev4: cdktf.booleanToTerraform(struct!.nist80053Rev4),
    pci: cdktf.booleanToTerraform(struct!.pci),
    soc: cdktf.booleanToTerraform(struct!.soc),
    soc_rev2: cdktf.booleanToTerraform(struct!.socRev2),
  }
}


export function reportRuleAwsComplianceReportsToHclTerraform(struct?: ReportRuleAwsComplianceReportsOutputReference | ReportRuleAwsComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cis_s3: {
      value: cdktf.booleanToHclTerraform(struct!.cisS3),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hipaa: {
      value: cdktf.booleanToHclTerraform(struct!.hipaa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iso_2700: {
      value: cdktf.booleanToHclTerraform(struct!.iso2700),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nist_800_171_rev2: {
      value: cdktf.booleanToHclTerraform(struct!.nist800171Rev2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nist_800_53_rev4: {
      value: cdktf.booleanToHclTerraform(struct!.nist80053Rev4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pci: {
      value: cdktf.booleanToHclTerraform(struct!.pci),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    soc: {
      value: cdktf.booleanToHclTerraform(struct!.soc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    soc_rev2: {
      value: cdktf.booleanToHclTerraform(struct!.socRev2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportRuleAwsComplianceReportsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportRuleAwsComplianceReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cisS3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cisS3 = this._cisS3;
    }
    if (this._hipaa !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipaa = this._hipaa;
    }
    if (this._iso2700 !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso2700 = this._iso2700;
    }
    if (this._nist800171Rev2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nist800171Rev2 = this._nist800171Rev2;
    }
    if (this._nist80053Rev4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nist80053Rev4 = this._nist80053Rev4;
    }
    if (this._pci !== undefined) {
      hasAnyValues = true;
      internalValueResult.pci = this._pci;
    }
    if (this._soc !== undefined) {
      hasAnyValues = true;
      internalValueResult.soc = this._soc;
    }
    if (this._socRev2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.socRev2 = this._socRev2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportRuleAwsComplianceReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cisS3 = undefined;
      this._hipaa = undefined;
      this._iso2700 = undefined;
      this._nist800171Rev2 = undefined;
      this._nist80053Rev4 = undefined;
      this._pci = undefined;
      this._soc = undefined;
      this._socRev2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cisS3 = value.cisS3;
      this._hipaa = value.hipaa;
      this._iso2700 = value.iso2700;
      this._nist800171Rev2 = value.nist800171Rev2;
      this._nist80053Rev4 = value.nist80053Rev4;
      this._pci = value.pci;
      this._soc = value.soc;
      this._socRev2 = value.socRev2;
    }
  }

  // cis_s3 - computed: false, optional: true, required: false
  private _cisS3?: boolean | cdktf.IResolvable; 
  public get cisS3() {
    return this.getBooleanAttribute('cis_s3');
  }
  public set cisS3(value: boolean | cdktf.IResolvable) {
    this._cisS3 = value;
  }
  public resetCisS3() {
    this._cisS3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisS3Input() {
    return this._cisS3;
  }

  // hipaa - computed: false, optional: true, required: false
  private _hipaa?: boolean | cdktf.IResolvable; 
  public get hipaa() {
    return this.getBooleanAttribute('hipaa');
  }
  public set hipaa(value: boolean | cdktf.IResolvable) {
    this._hipaa = value;
  }
  public resetHipaa() {
    this._hipaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipaaInput() {
    return this._hipaa;
  }

  // iso_2700 - computed: false, optional: true, required: false
  private _iso2700?: boolean | cdktf.IResolvable; 
  public get iso2700() {
    return this.getBooleanAttribute('iso_2700');
  }
  public set iso2700(value: boolean | cdktf.IResolvable) {
    this._iso2700 = value;
  }
  public resetIso2700() {
    this._iso2700 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iso2700Input() {
    return this._iso2700;
  }

  // nist_800_171_rev2 - computed: false, optional: true, required: false
  private _nist800171Rev2?: boolean | cdktf.IResolvable; 
  public get nist800171Rev2() {
    return this.getBooleanAttribute('nist_800_171_rev2');
  }
  public set nist800171Rev2(value: boolean | cdktf.IResolvable) {
    this._nist800171Rev2 = value;
  }
  public resetNist800171Rev2() {
    this._nist800171Rev2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nist800171Rev2Input() {
    return this._nist800171Rev2;
  }

  // nist_800_53_rev4 - computed: false, optional: true, required: false
  private _nist80053Rev4?: boolean | cdktf.IResolvable; 
  public get nist80053Rev4() {
    return this.getBooleanAttribute('nist_800_53_rev4');
  }
  public set nist80053Rev4(value: boolean | cdktf.IResolvable) {
    this._nist80053Rev4 = value;
  }
  public resetNist80053Rev4() {
    this._nist80053Rev4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nist80053Rev4Input() {
    return this._nist80053Rev4;
  }

  // pci - computed: false, optional: true, required: false
  private _pci?: boolean | cdktf.IResolvable; 
  public get pci() {
    return this.getBooleanAttribute('pci');
  }
  public set pci(value: boolean | cdktf.IResolvable) {
    this._pci = value;
  }
  public resetPci() {
    this._pci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciInput() {
    return this._pci;
  }

  // soc - computed: false, optional: true, required: false
  private _soc?: boolean | cdktf.IResolvable; 
  public get soc() {
    return this.getBooleanAttribute('soc');
  }
  public set soc(value: boolean | cdktf.IResolvable) {
    this._soc = value;
  }
  public resetSoc() {
    this._soc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socInput() {
    return this._soc;
  }

  // soc_rev2 - computed: false, optional: true, required: false
  private _socRev2?: boolean | cdktf.IResolvable; 
  public get socRev2() {
    return this.getBooleanAttribute('soc_rev2');
  }
  public set socRev2(value: boolean | cdktf.IResolvable) {
    this._socRev2 = value;
  }
  public resetSocRev2() {
    this._socRev2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socRev2Input() {
    return this._socRev2;
  }
}
export interface ReportRuleAzureComplianceReports {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#cis ReportRule#cis}
  */
  readonly cis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#cis_131 ReportRule#cis_131}
  */
  readonly cis131?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#pci ReportRule#pci}
  */
  readonly pci?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#soc ReportRule#soc}
  */
  readonly soc?: boolean | cdktf.IResolvable;
}

export function reportRuleAzureComplianceReportsToTerraform(struct?: ReportRuleAzureComplianceReportsOutputReference | ReportRuleAzureComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cis: cdktf.booleanToTerraform(struct!.cis),
    cis_131: cdktf.booleanToTerraform(struct!.cis131),
    pci: cdktf.booleanToTerraform(struct!.pci),
    soc: cdktf.booleanToTerraform(struct!.soc),
  }
}


export function reportRuleAzureComplianceReportsToHclTerraform(struct?: ReportRuleAzureComplianceReportsOutputReference | ReportRuleAzureComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cis: {
      value: cdktf.booleanToHclTerraform(struct!.cis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cis_131: {
      value: cdktf.booleanToHclTerraform(struct!.cis131),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pci: {
      value: cdktf.booleanToHclTerraform(struct!.pci),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    soc: {
      value: cdktf.booleanToHclTerraform(struct!.soc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportRuleAzureComplianceReportsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportRuleAzureComplianceReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cis !== undefined) {
      hasAnyValues = true;
      internalValueResult.cis = this._cis;
    }
    if (this._cis131 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cis131 = this._cis131;
    }
    if (this._pci !== undefined) {
      hasAnyValues = true;
      internalValueResult.pci = this._pci;
    }
    if (this._soc !== undefined) {
      hasAnyValues = true;
      internalValueResult.soc = this._soc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportRuleAzureComplianceReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cis = undefined;
      this._cis131 = undefined;
      this._pci = undefined;
      this._soc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cis = value.cis;
      this._cis131 = value.cis131;
      this._pci = value.pci;
      this._soc = value.soc;
    }
  }

  // cis - computed: false, optional: true, required: false
  private _cis?: boolean | cdktf.IResolvable; 
  public get cis() {
    return this.getBooleanAttribute('cis');
  }
  public set cis(value: boolean | cdktf.IResolvable) {
    this._cis = value;
  }
  public resetCis() {
    this._cis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisInput() {
    return this._cis;
  }

  // cis_131 - computed: false, optional: true, required: false
  private _cis131?: boolean | cdktf.IResolvable; 
  public get cis131() {
    return this.getBooleanAttribute('cis_131');
  }
  public set cis131(value: boolean | cdktf.IResolvable) {
    this._cis131 = value;
  }
  public resetCis131() {
    this._cis131 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cis131Input() {
    return this._cis131;
  }

  // pci - computed: false, optional: true, required: false
  private _pci?: boolean | cdktf.IResolvable; 
  public get pci() {
    return this.getBooleanAttribute('pci');
  }
  public set pci(value: boolean | cdktf.IResolvable) {
    this._pci = value;
  }
  public resetPci() {
    this._pci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciInput() {
    return this._pci;
  }

  // soc - computed: false, optional: true, required: false
  private _soc?: boolean | cdktf.IResolvable; 
  public get soc() {
    return this.getBooleanAttribute('soc');
  }
  public set soc(value: boolean | cdktf.IResolvable) {
    this._soc = value;
  }
  public resetSoc() {
    this._soc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socInput() {
    return this._soc;
  }
}
export interface ReportRuleDailyComplianceReports {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#aws_cloudtrail ReportRule#aws_cloudtrail}
  */
  readonly awsCloudtrail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#aws_compliance ReportRule#aws_compliance}
  */
  readonly awsCompliance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#azure_activity_log ReportRule#azure_activity_log}
  */
  readonly azureActivityLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#azure_compliance ReportRule#azure_compliance}
  */
  readonly azureCompliance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#gcp_audit_trail ReportRule#gcp_audit_trail}
  */
  readonly gcpAuditTrail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#gcp_compliance ReportRule#gcp_compliance}
  */
  readonly gcpCompliance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#host_security ReportRule#host_security}
  */
  readonly hostSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#openshift_compliance ReportRule#openshift_compliance}
  */
  readonly openshiftCompliance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#openshift_compliance_events ReportRule#openshift_compliance_events}
  */
  readonly openshiftComplianceEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#platform ReportRule#platform}
  */
  readonly platform?: boolean | cdktf.IResolvable;
}

export function reportRuleDailyComplianceReportsToTerraform(struct?: ReportRuleDailyComplianceReportsOutputReference | ReportRuleDailyComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_cloudtrail: cdktf.booleanToTerraform(struct!.awsCloudtrail),
    aws_compliance: cdktf.booleanToTerraform(struct!.awsCompliance),
    azure_activity_log: cdktf.booleanToTerraform(struct!.azureActivityLog),
    azure_compliance: cdktf.booleanToTerraform(struct!.azureCompliance),
    gcp_audit_trail: cdktf.booleanToTerraform(struct!.gcpAuditTrail),
    gcp_compliance: cdktf.booleanToTerraform(struct!.gcpCompliance),
    host_security: cdktf.booleanToTerraform(struct!.hostSecurity),
    openshift_compliance: cdktf.booleanToTerraform(struct!.openshiftCompliance),
    openshift_compliance_events: cdktf.booleanToTerraform(struct!.openshiftComplianceEvents),
    platform: cdktf.booleanToTerraform(struct!.platform),
  }
}


export function reportRuleDailyComplianceReportsToHclTerraform(struct?: ReportRuleDailyComplianceReportsOutputReference | ReportRuleDailyComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_cloudtrail: {
      value: cdktf.booleanToHclTerraform(struct!.awsCloudtrail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_compliance: {
      value: cdktf.booleanToHclTerraform(struct!.awsCompliance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    azure_activity_log: {
      value: cdktf.booleanToHclTerraform(struct!.azureActivityLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    azure_compliance: {
      value: cdktf.booleanToHclTerraform(struct!.azureCompliance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gcp_audit_trail: {
      value: cdktf.booleanToHclTerraform(struct!.gcpAuditTrail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gcp_compliance: {
      value: cdktf.booleanToHclTerraform(struct!.gcpCompliance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_security: {
      value: cdktf.booleanToHclTerraform(struct!.hostSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    openshift_compliance: {
      value: cdktf.booleanToHclTerraform(struct!.openshiftCompliance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    openshift_compliance_events: {
      value: cdktf.booleanToHclTerraform(struct!.openshiftComplianceEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    platform: {
      value: cdktf.booleanToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportRuleDailyComplianceReportsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportRuleDailyComplianceReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsCloudtrail !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCloudtrail = this._awsCloudtrail;
    }
    if (this._awsCompliance !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCompliance = this._awsCompliance;
    }
    if (this._azureActivityLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureActivityLog = this._azureActivityLog;
    }
    if (this._azureCompliance !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCompliance = this._azureCompliance;
    }
    if (this._gcpAuditTrail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAuditTrail = this._gcpAuditTrail;
    }
    if (this._gcpCompliance !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpCompliance = this._gcpCompliance;
    }
    if (this._hostSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSecurity = this._hostSecurity;
    }
    if (this._openshiftCompliance !== undefined) {
      hasAnyValues = true;
      internalValueResult.openshiftCompliance = this._openshiftCompliance;
    }
    if (this._openshiftComplianceEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.openshiftComplianceEvents = this._openshiftComplianceEvents;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportRuleDailyComplianceReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsCloudtrail = undefined;
      this._awsCompliance = undefined;
      this._azureActivityLog = undefined;
      this._azureCompliance = undefined;
      this._gcpAuditTrail = undefined;
      this._gcpCompliance = undefined;
      this._hostSecurity = undefined;
      this._openshiftCompliance = undefined;
      this._openshiftComplianceEvents = undefined;
      this._platform = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsCloudtrail = value.awsCloudtrail;
      this._awsCompliance = value.awsCompliance;
      this._azureActivityLog = value.azureActivityLog;
      this._azureCompliance = value.azureCompliance;
      this._gcpAuditTrail = value.gcpAuditTrail;
      this._gcpCompliance = value.gcpCompliance;
      this._hostSecurity = value.hostSecurity;
      this._openshiftCompliance = value.openshiftCompliance;
      this._openshiftComplianceEvents = value.openshiftComplianceEvents;
      this._platform = value.platform;
    }
  }

  // aws_cloudtrail - computed: false, optional: true, required: false
  private _awsCloudtrail?: boolean | cdktf.IResolvable; 
  public get awsCloudtrail() {
    return this.getBooleanAttribute('aws_cloudtrail');
  }
  public set awsCloudtrail(value: boolean | cdktf.IResolvable) {
    this._awsCloudtrail = value;
  }
  public resetAwsCloudtrail() {
    this._awsCloudtrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudtrailInput() {
    return this._awsCloudtrail;
  }

  // aws_compliance - computed: false, optional: true, required: false
  private _awsCompliance?: boolean | cdktf.IResolvable; 
  public get awsCompliance() {
    return this.getBooleanAttribute('aws_compliance');
  }
  public set awsCompliance(value: boolean | cdktf.IResolvable) {
    this._awsCompliance = value;
  }
  public resetAwsCompliance() {
    this._awsCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsComplianceInput() {
    return this._awsCompliance;
  }

  // azure_activity_log - computed: false, optional: true, required: false
  private _azureActivityLog?: boolean | cdktf.IResolvable; 
  public get azureActivityLog() {
    return this.getBooleanAttribute('azure_activity_log');
  }
  public set azureActivityLog(value: boolean | cdktf.IResolvable) {
    this._azureActivityLog = value;
  }
  public resetAzureActivityLog() {
    this._azureActivityLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActivityLogInput() {
    return this._azureActivityLog;
  }

  // azure_compliance - computed: false, optional: true, required: false
  private _azureCompliance?: boolean | cdktf.IResolvable; 
  public get azureCompliance() {
    return this.getBooleanAttribute('azure_compliance');
  }
  public set azureCompliance(value: boolean | cdktf.IResolvable) {
    this._azureCompliance = value;
  }
  public resetAzureCompliance() {
    this._azureCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureComplianceInput() {
    return this._azureCompliance;
  }

  // gcp_audit_trail - computed: false, optional: true, required: false
  private _gcpAuditTrail?: boolean | cdktf.IResolvable; 
  public get gcpAuditTrail() {
    return this.getBooleanAttribute('gcp_audit_trail');
  }
  public set gcpAuditTrail(value: boolean | cdktf.IResolvable) {
    this._gcpAuditTrail = value;
  }
  public resetGcpAuditTrail() {
    this._gcpAuditTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAuditTrailInput() {
    return this._gcpAuditTrail;
  }

  // gcp_compliance - computed: false, optional: true, required: false
  private _gcpCompliance?: boolean | cdktf.IResolvable; 
  public get gcpCompliance() {
    return this.getBooleanAttribute('gcp_compliance');
  }
  public set gcpCompliance(value: boolean | cdktf.IResolvable) {
    this._gcpCompliance = value;
  }
  public resetGcpCompliance() {
    this._gcpCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpComplianceInput() {
    return this._gcpCompliance;
  }

  // host_security - computed: false, optional: true, required: false
  private _hostSecurity?: boolean | cdktf.IResolvable; 
  public get hostSecurity() {
    return this.getBooleanAttribute('host_security');
  }
  public set hostSecurity(value: boolean | cdktf.IResolvable) {
    this._hostSecurity = value;
  }
  public resetHostSecurity() {
    this._hostSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSecurityInput() {
    return this._hostSecurity;
  }

  // openshift_compliance - computed: false, optional: true, required: false
  private _openshiftCompliance?: boolean | cdktf.IResolvable; 
  public get openshiftCompliance() {
    return this.getBooleanAttribute('openshift_compliance');
  }
  public set openshiftCompliance(value: boolean | cdktf.IResolvable) {
    this._openshiftCompliance = value;
  }
  public resetOpenshiftCompliance() {
    this._openshiftCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openshiftComplianceInput() {
    return this._openshiftCompliance;
  }

  // openshift_compliance_events - computed: false, optional: true, required: false
  private _openshiftComplianceEvents?: boolean | cdktf.IResolvable; 
  public get openshiftComplianceEvents() {
    return this.getBooleanAttribute('openshift_compliance_events');
  }
  public set openshiftComplianceEvents(value: boolean | cdktf.IResolvable) {
    this._openshiftComplianceEvents = value;
  }
  public resetOpenshiftComplianceEvents() {
    this._openshiftComplianceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openshiftComplianceEventsInput() {
    return this._openshiftComplianceEvents;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: boolean | cdktf.IResolvable; 
  public get platform() {
    return this.getBooleanAttribute('platform');
  }
  public set platform(value: boolean | cdktf.IResolvable) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }
}
export interface ReportRuleGcpComplianceReports {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#cis ReportRule#cis}
  */
  readonly cis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#cis_12 ReportRule#cis_12}
  */
  readonly cis12?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#hipaa ReportRule#hipaa}
  */
  readonly hipaa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#hipaa_rev2 ReportRule#hipaa_rev2}
  */
  readonly hipaaRev2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#iso_27001 ReportRule#iso_27001}
  */
  readonly iso27001?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#k8s ReportRule#k8s}
  */
  readonly k8S?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#pci ReportRule#pci}
  */
  readonly pci?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#pci_rev2 ReportRule#pci_rev2}
  */
  readonly pciRev2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#soc ReportRule#soc}
  */
  readonly soc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#soc_rev2 ReportRule#soc_rev2}
  */
  readonly socRev2?: boolean | cdktf.IResolvable;
}

export function reportRuleGcpComplianceReportsToTerraform(struct?: ReportRuleGcpComplianceReportsOutputReference | ReportRuleGcpComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cis: cdktf.booleanToTerraform(struct!.cis),
    cis_12: cdktf.booleanToTerraform(struct!.cis12),
    hipaa: cdktf.booleanToTerraform(struct!.hipaa),
    hipaa_rev2: cdktf.booleanToTerraform(struct!.hipaaRev2),
    iso_27001: cdktf.booleanToTerraform(struct!.iso27001),
    k8s: cdktf.booleanToTerraform(struct!.k8S),
    pci: cdktf.booleanToTerraform(struct!.pci),
    pci_rev2: cdktf.booleanToTerraform(struct!.pciRev2),
    soc: cdktf.booleanToTerraform(struct!.soc),
    soc_rev2: cdktf.booleanToTerraform(struct!.socRev2),
  }
}


export function reportRuleGcpComplianceReportsToHclTerraform(struct?: ReportRuleGcpComplianceReportsOutputReference | ReportRuleGcpComplianceReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cis: {
      value: cdktf.booleanToHclTerraform(struct!.cis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cis_12: {
      value: cdktf.booleanToHclTerraform(struct!.cis12),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hipaa: {
      value: cdktf.booleanToHclTerraform(struct!.hipaa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hipaa_rev2: {
      value: cdktf.booleanToHclTerraform(struct!.hipaaRev2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iso_27001: {
      value: cdktf.booleanToHclTerraform(struct!.iso27001),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    k8s: {
      value: cdktf.booleanToHclTerraform(struct!.k8S),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pci: {
      value: cdktf.booleanToHclTerraform(struct!.pci),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pci_rev2: {
      value: cdktf.booleanToHclTerraform(struct!.pciRev2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    soc: {
      value: cdktf.booleanToHclTerraform(struct!.soc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    soc_rev2: {
      value: cdktf.booleanToHclTerraform(struct!.socRev2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportRuleGcpComplianceReportsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportRuleGcpComplianceReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cis !== undefined) {
      hasAnyValues = true;
      internalValueResult.cis = this._cis;
    }
    if (this._cis12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cis12 = this._cis12;
    }
    if (this._hipaa !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipaa = this._hipaa;
    }
    if (this._hipaaRev2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipaaRev2 = this._hipaaRev2;
    }
    if (this._iso27001 !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso27001 = this._iso27001;
    }
    if (this._k8S !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8S = this._k8S;
    }
    if (this._pci !== undefined) {
      hasAnyValues = true;
      internalValueResult.pci = this._pci;
    }
    if (this._pciRev2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.pciRev2 = this._pciRev2;
    }
    if (this._soc !== undefined) {
      hasAnyValues = true;
      internalValueResult.soc = this._soc;
    }
    if (this._socRev2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.socRev2 = this._socRev2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportRuleGcpComplianceReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cis = undefined;
      this._cis12 = undefined;
      this._hipaa = undefined;
      this._hipaaRev2 = undefined;
      this._iso27001 = undefined;
      this._k8S = undefined;
      this._pci = undefined;
      this._pciRev2 = undefined;
      this._soc = undefined;
      this._socRev2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cis = value.cis;
      this._cis12 = value.cis12;
      this._hipaa = value.hipaa;
      this._hipaaRev2 = value.hipaaRev2;
      this._iso27001 = value.iso27001;
      this._k8S = value.k8S;
      this._pci = value.pci;
      this._pciRev2 = value.pciRev2;
      this._soc = value.soc;
      this._socRev2 = value.socRev2;
    }
  }

  // cis - computed: false, optional: true, required: false
  private _cis?: boolean | cdktf.IResolvable; 
  public get cis() {
    return this.getBooleanAttribute('cis');
  }
  public set cis(value: boolean | cdktf.IResolvable) {
    this._cis = value;
  }
  public resetCis() {
    this._cis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cisInput() {
    return this._cis;
  }

  // cis_12 - computed: false, optional: true, required: false
  private _cis12?: boolean | cdktf.IResolvable; 
  public get cis12() {
    return this.getBooleanAttribute('cis_12');
  }
  public set cis12(value: boolean | cdktf.IResolvable) {
    this._cis12 = value;
  }
  public resetCis12() {
    this._cis12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cis12Input() {
    return this._cis12;
  }

  // hipaa - computed: false, optional: true, required: false
  private _hipaa?: boolean | cdktf.IResolvable; 
  public get hipaa() {
    return this.getBooleanAttribute('hipaa');
  }
  public set hipaa(value: boolean | cdktf.IResolvable) {
    this._hipaa = value;
  }
  public resetHipaa() {
    this._hipaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipaaInput() {
    return this._hipaa;
  }

  // hipaa_rev2 - computed: false, optional: true, required: false
  private _hipaaRev2?: boolean | cdktf.IResolvable; 
  public get hipaaRev2() {
    return this.getBooleanAttribute('hipaa_rev2');
  }
  public set hipaaRev2(value: boolean | cdktf.IResolvable) {
    this._hipaaRev2 = value;
  }
  public resetHipaaRev2() {
    this._hipaaRev2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipaaRev2Input() {
    return this._hipaaRev2;
  }

  // iso_27001 - computed: false, optional: true, required: false
  private _iso27001?: boolean | cdktf.IResolvable; 
  public get iso27001() {
    return this.getBooleanAttribute('iso_27001');
  }
  public set iso27001(value: boolean | cdktf.IResolvable) {
    this._iso27001 = value;
  }
  public resetIso27001() {
    this._iso27001 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iso27001Input() {
    return this._iso27001;
  }

  // k8s - computed: false, optional: true, required: false
  private _k8S?: boolean | cdktf.IResolvable; 
  public get k8S() {
    return this.getBooleanAttribute('k8s');
  }
  public set k8S(value: boolean | cdktf.IResolvable) {
    this._k8S = value;
  }
  public resetK8S() {
    this._k8S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SInput() {
    return this._k8S;
  }

  // pci - computed: false, optional: true, required: false
  private _pci?: boolean | cdktf.IResolvable; 
  public get pci() {
    return this.getBooleanAttribute('pci');
  }
  public set pci(value: boolean | cdktf.IResolvable) {
    this._pci = value;
  }
  public resetPci() {
    this._pci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciInput() {
    return this._pci;
  }

  // pci_rev2 - computed: false, optional: true, required: false
  private _pciRev2?: boolean | cdktf.IResolvable; 
  public get pciRev2() {
    return this.getBooleanAttribute('pci_rev2');
  }
  public set pciRev2(value: boolean | cdktf.IResolvable) {
    this._pciRev2 = value;
  }
  public resetPciRev2() {
    this._pciRev2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciRev2Input() {
    return this._pciRev2;
  }

  // soc - computed: false, optional: true, required: false
  private _soc?: boolean | cdktf.IResolvable; 
  public get soc() {
    return this.getBooleanAttribute('soc');
  }
  public set soc(value: boolean | cdktf.IResolvable) {
    this._soc = value;
  }
  public resetSoc() {
    this._soc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socInput() {
    return this._soc;
  }

  // soc_rev2 - computed: false, optional: true, required: false
  private _socRev2?: boolean | cdktf.IResolvable; 
  public get socRev2() {
    return this.getBooleanAttribute('soc_rev2');
  }
  public set socRev2(value: boolean | cdktf.IResolvable) {
    this._socRev2 = value;
  }
  public resetSocRev2() {
    this._socRev2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socRev2Input() {
    return this._socRev2;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule lacework_report_rule}
*/
export class ReportRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_report_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportRule to import
  * @param importFromId The id of the existing ReportRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_report_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/report_rule lacework_report_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ReportRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_report_rule',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.11',
        providerVersionConstraint: '2.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._emailAlertChannels = config.emailAlertChannels;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._resourceGroups = config.resourceGroups;
    this._severities = config.severities;
    this._weeklySnapshot = config.weeklySnapshot;
    this._awsComplianceReports.internalValue = config.awsComplianceReports;
    this._azureComplianceReports.internalValue = config.azureComplianceReports;
    this._dailyComplianceReports.internalValue = config.dailyComplianceReports;
    this._gcpComplianceReports.internalValue = config.gcpComplianceReports;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_or_updated_by - computed: true, optional: false, required: false
  public get createdOrUpdatedBy() {
    return this.getStringAttribute('created_or_updated_by');
  }

  // created_or_updated_time - computed: true, optional: false, required: false
  public get createdOrUpdatedTime() {
    return this.getStringAttribute('created_or_updated_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // email_alert_channels - computed: false, optional: false, required: true
  private _emailAlertChannels?: string[]; 
  public get emailAlertChannels() {
    return cdktf.Fn.tolist(this.getListAttribute('email_alert_channels'));
  }
  public set emailAlertChannels(value: string[]) {
    this._emailAlertChannels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAlertChannelsInput() {
    return this._emailAlertChannels;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_groups'));
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }

  // severities - computed: false, optional: false, required: true
  private _severities?: string[]; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // weekly_snapshot - computed: false, optional: true, required: false
  private _weeklySnapshot?: boolean | cdktf.IResolvable; 
  public get weeklySnapshot() {
    return this.getBooleanAttribute('weekly_snapshot');
  }
  public set weeklySnapshot(value: boolean | cdktf.IResolvable) {
    this._weeklySnapshot = value;
  }
  public resetWeeklySnapshot() {
    this._weeklySnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklySnapshotInput() {
    return this._weeklySnapshot;
  }

  // aws_compliance_reports - computed: false, optional: true, required: false
  private _awsComplianceReports = new ReportRuleAwsComplianceReportsOutputReference(this, "aws_compliance_reports");
  public get awsComplianceReports() {
    return this._awsComplianceReports;
  }
  public putAwsComplianceReports(value: ReportRuleAwsComplianceReports) {
    this._awsComplianceReports.internalValue = value;
  }
  public resetAwsComplianceReports() {
    this._awsComplianceReports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsComplianceReportsInput() {
    return this._awsComplianceReports.internalValue;
  }

  // azure_compliance_reports - computed: false, optional: true, required: false
  private _azureComplianceReports = new ReportRuleAzureComplianceReportsOutputReference(this, "azure_compliance_reports");
  public get azureComplianceReports() {
    return this._azureComplianceReports;
  }
  public putAzureComplianceReports(value: ReportRuleAzureComplianceReports) {
    this._azureComplianceReports.internalValue = value;
  }
  public resetAzureComplianceReports() {
    this._azureComplianceReports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureComplianceReportsInput() {
    return this._azureComplianceReports.internalValue;
  }

  // daily_compliance_reports - computed: false, optional: true, required: false
  private _dailyComplianceReports = new ReportRuleDailyComplianceReportsOutputReference(this, "daily_compliance_reports");
  public get dailyComplianceReports() {
    return this._dailyComplianceReports;
  }
  public putDailyComplianceReports(value: ReportRuleDailyComplianceReports) {
    this._dailyComplianceReports.internalValue = value;
  }
  public resetDailyComplianceReports() {
    this._dailyComplianceReports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyComplianceReportsInput() {
    return this._dailyComplianceReports.internalValue;
  }

  // gcp_compliance_reports - computed: false, optional: true, required: false
  private _gcpComplianceReports = new ReportRuleGcpComplianceReportsOutputReference(this, "gcp_compliance_reports");
  public get gcpComplianceReports() {
    return this._gcpComplianceReports;
  }
  public putGcpComplianceReports(value: ReportRuleGcpComplianceReports) {
    this._gcpComplianceReports.internalValue = value;
  }
  public resetGcpComplianceReports() {
    this._gcpComplianceReports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpComplianceReportsInput() {
    return this._gcpComplianceReports.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      email_alert_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailAlertChannels),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceGroups),
      severities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severities),
      weekly_snapshot: cdktf.booleanToTerraform(this._weeklySnapshot),
      aws_compliance_reports: reportRuleAwsComplianceReportsToTerraform(this._awsComplianceReports.internalValue),
      azure_compliance_reports: reportRuleAzureComplianceReportsToTerraform(this._azureComplianceReports.internalValue),
      daily_compliance_reports: reportRuleDailyComplianceReportsToTerraform(this._dailyComplianceReports.internalValue),
      gcp_compliance_reports: reportRuleGcpComplianceReportsToTerraform(this._gcpComplianceReports.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_alert_channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailAlertChannels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      severities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      weekly_snapshot: {
        value: cdktf.booleanToHclTerraform(this._weeklySnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_compliance_reports: {
        value: reportRuleAwsComplianceReportsToHclTerraform(this._awsComplianceReports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportRuleAwsComplianceReportsList",
      },
      azure_compliance_reports: {
        value: reportRuleAzureComplianceReportsToHclTerraform(this._azureComplianceReports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportRuleAzureComplianceReportsList",
      },
      daily_compliance_reports: {
        value: reportRuleDailyComplianceReportsToHclTerraform(this._dailyComplianceReports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportRuleDailyComplianceReportsList",
      },
      gcp_compliance_reports: {
        value: reportRuleGcpComplianceReportsToHclTerraform(this._gcpComplianceReports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportRuleGcpComplianceReportsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
