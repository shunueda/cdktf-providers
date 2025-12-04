// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/data-sources/org
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCplnOrgConfig extends cdktf.TerraformMetaArguments {
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/data-sources/org#auth_config DataCplnOrg#auth_config}
  */
  readonly authConfig?: DataCplnOrgAuthConfig[] | cdktf.IResolvable;
  /**
  * observability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/data-sources/org#observability DataCplnOrg#observability}
  */
  readonly observability?: DataCplnOrgObservability[] | cdktf.IResolvable;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/data-sources/org#security DataCplnOrg#security}
  */
  readonly security?: DataCplnOrgSecurity[] | cdktf.IResolvable;
}
export interface DataCplnOrgStatus {
}

export function dataCplnOrgStatusToTerraform(struct?: DataCplnOrgStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnOrgStatusToHclTerraform(struct?: DataCplnOrgStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnOrgStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCplnOrgStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnOrgStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_link - computed: true, optional: false, required: false
  public get accountLink() {
    return this.getStringAttribute('account_link');
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // endpoint_prefix - computed: true, optional: false, required: false
  public get endpointPrefix() {
    return this.getStringAttribute('endpoint_prefix');
  }
}

export class DataCplnOrgStatusList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCplnOrgStatusOutputReference {
    return new DataCplnOrgStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnOrgAuthConfig {
}

export function dataCplnOrgAuthConfigToTerraform(struct?: DataCplnOrgAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnOrgAuthConfigToHclTerraform(struct?: DataCplnOrgAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnOrgAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCplnOrgAuthConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnOrgAuthConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // domain_auto_members - computed: true, optional: false, required: false
  public get domainAutoMembers() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_auto_members'));
  }

  // saml_only - computed: true, optional: false, required: false
  public get samlOnly() {
    return this.getBooleanAttribute('saml_only');
  }
}

export class DataCplnOrgAuthConfigList extends cdktf.ComplexList {
  public internalValue? : DataCplnOrgAuthConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCplnOrgAuthConfigOutputReference {
    return new DataCplnOrgAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnOrgObservability {
}

export function dataCplnOrgObservabilityToTerraform(struct?: DataCplnOrgObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnOrgObservabilityToHclTerraform(struct?: DataCplnOrgObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnOrgObservabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCplnOrgObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnOrgObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // default_alert_emails - computed: true, optional: false, required: false
  public get defaultAlertEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('default_alert_emails'));
  }

  // logs_retention_days - computed: true, optional: false, required: false
  public get logsRetentionDays() {
    return this.getNumberAttribute('logs_retention_days');
  }

  // metrics_retention_days - computed: true, optional: false, required: false
  public get metricsRetentionDays() {
    return this.getNumberAttribute('metrics_retention_days');
  }

  // traces_retention_days - computed: true, optional: false, required: false
  public get tracesRetentionDays() {
    return this.getNumberAttribute('traces_retention_days');
  }
}

export class DataCplnOrgObservabilityList extends cdktf.ComplexList {
  public internalValue? : DataCplnOrgObservability[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCplnOrgObservabilityOutputReference {
    return new DataCplnOrgObservabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnOrgSecurityThreatDetectionSyslog {
}

export function dataCplnOrgSecurityThreatDetectionSyslogToTerraform(struct?: DataCplnOrgSecurityThreatDetectionSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnOrgSecurityThreatDetectionSyslogToHclTerraform(struct?: DataCplnOrgSecurityThreatDetectionSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnOrgSecurityThreatDetectionSyslogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCplnOrgSecurityThreatDetectionSyslog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnOrgSecurityThreatDetectionSyslog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // transport - computed: true, optional: false, required: false
  public get transport() {
    return this.getStringAttribute('transport');
  }
}

export class DataCplnOrgSecurityThreatDetectionSyslogList extends cdktf.ComplexList {
  public internalValue? : DataCplnOrgSecurityThreatDetectionSyslog[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCplnOrgSecurityThreatDetectionSyslogOutputReference {
    return new DataCplnOrgSecurityThreatDetectionSyslogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnOrgSecurityThreatDetection {
  /**
  * Any threats with this severity and more severe will be sent. Others will be ignored. Valid values: `warning`, `error`, or `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/data-sources/org#minimum_severity DataCplnOrg#minimum_severity}
  */
  readonly minimumSeverity?: string;
  /**
  * syslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/data-sources/org#syslog DataCplnOrg#syslog}
  */
  readonly syslog?: DataCplnOrgSecurityThreatDetectionSyslog[] | cdktf.IResolvable;
}

export function dataCplnOrgSecurityThreatDetectionToTerraform(struct?: DataCplnOrgSecurityThreatDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_severity: cdktf.stringToTerraform(struct!.minimumSeverity),
    syslog: cdktf.listMapper(dataCplnOrgSecurityThreatDetectionSyslogToTerraform, true)(struct!.syslog),
  }
}


export function dataCplnOrgSecurityThreatDetectionToHclTerraform(struct?: DataCplnOrgSecurityThreatDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_severity: {
      value: cdktf.stringToHclTerraform(struct!.minimumSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog: {
      value: cdktf.listMapperHcl(dataCplnOrgSecurityThreatDetectionSyslogToHclTerraform, true)(struct!.syslog),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnOrgSecurityThreatDetectionSyslogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnOrgSecurityThreatDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCplnOrgSecurityThreatDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSeverity = this._minimumSeverity;
    }
    if (this._syslog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnOrgSecurityThreatDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumSeverity = undefined;
      this._syslog.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumSeverity = value.minimumSeverity;
      this._syslog.internalValue = value.syslog;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // minimum_severity - computed: false, optional: true, required: false
  private _minimumSeverity?: string; 
  public get minimumSeverity() {
    return this.getStringAttribute('minimum_severity');
  }
  public set minimumSeverity(value: string) {
    this._minimumSeverity = value;
  }
  public resetMinimumSeverity() {
    this._minimumSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSeverityInput() {
    return this._minimumSeverity;
  }

  // syslog - computed: false, optional: true, required: false
  private _syslog = new DataCplnOrgSecurityThreatDetectionSyslogList(this, "syslog", false);
  public get syslog() {
    return this._syslog;
  }
  public putSyslog(value: DataCplnOrgSecurityThreatDetectionSyslog[] | cdktf.IResolvable) {
    this._syslog.internalValue = value;
  }
  public resetSyslog() {
    this._syslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog.internalValue;
  }
}

export class DataCplnOrgSecurityThreatDetectionList extends cdktf.ComplexList {
  public internalValue? : DataCplnOrgSecurityThreatDetection[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCplnOrgSecurityThreatDetectionOutputReference {
    return new DataCplnOrgSecurityThreatDetectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnOrgSecurity {
  /**
  * threat_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/data-sources/org#threat_detection DataCplnOrg#threat_detection}
  */
  readonly threatDetection?: DataCplnOrgSecurityThreatDetection[] | cdktf.IResolvable;
}

export function dataCplnOrgSecurityToTerraform(struct?: DataCplnOrgSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threat_detection: cdktf.listMapper(dataCplnOrgSecurityThreatDetectionToTerraform, true)(struct!.threatDetection),
  }
}


export function dataCplnOrgSecurityToHclTerraform(struct?: DataCplnOrgSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threat_detection: {
      value: cdktf.listMapperHcl(dataCplnOrgSecurityThreatDetectionToHclTerraform, true)(struct!.threatDetection),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnOrgSecurityThreatDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnOrgSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCplnOrgSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threatDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatDetection = this._threatDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnOrgSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threatDetection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threatDetection.internalValue = value.threatDetection;
    }
  }

  // threat_detection - computed: false, optional: true, required: false
  private _threatDetection = new DataCplnOrgSecurityThreatDetectionList(this, "threat_detection", false);
  public get threatDetection() {
    return this._threatDetection;
  }
  public putThreatDetection(value: DataCplnOrgSecurityThreatDetection[] | cdktf.IResolvable) {
    this._threatDetection.internalValue = value;
  }
  public resetThreatDetection() {
    this._threatDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatDetectionInput() {
    return this._threatDetection.internalValue;
  }
}

export class DataCplnOrgSecurityList extends cdktf.ComplexList {
  public internalValue? : DataCplnOrgSecurity[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCplnOrgSecurityOutputReference {
    return new DataCplnOrgSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/data-sources/org cpln_org}
*/
export class DataCplnOrg extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_org";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCplnOrg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCplnOrg to import
  * @param importFromId The id of the existing DataCplnOrg that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/data-sources/org#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCplnOrg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_org", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/data-sources/org cpln_org} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCplnOrgConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCplnOrgConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cpln_org',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.19',
        providerVersionConstraint: '1.2.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authConfig.internalValue = config.authConfig;
    this._observability.internalValue = config.observability;
    this._security.internalValue = config.security;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // cpln_id - computed: true, optional: false, required: false
  public get cplnId() {
    return this.getStringAttribute('cpln_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invitees - computed: true, optional: false, required: false
  public get invitees() {
    return cdktf.Fn.tolist(this.getListAttribute('invitees'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // session_timeout_seconds - computed: true, optional: false, required: false
  public get sessionTimeoutSeconds() {
    return this.getNumberAttribute('session_timeout_seconds');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataCplnOrgStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new DataCplnOrgAuthConfigList(this, "auth_config", false);
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: DataCplnOrgAuthConfig[] | cdktf.IResolvable) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // observability - computed: false, optional: true, required: false
  private _observability = new DataCplnOrgObservabilityList(this, "observability", false);
  public get observability() {
    return this._observability;
  }
  public putObservability(value: DataCplnOrgObservability[] | cdktf.IResolvable) {
    this._observability.internalValue = value;
  }
  public resetObservability() {
    this._observability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityInput() {
    return this._observability.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataCplnOrgSecurityList(this, "security", false);
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataCplnOrgSecurity[] | cdktf.IResolvable) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_config: cdktf.listMapper(dataCplnOrgAuthConfigToTerraform, true)(this._authConfig.internalValue),
      observability: cdktf.listMapper(dataCplnOrgObservabilityToTerraform, true)(this._observability.internalValue),
      security: cdktf.listMapper(dataCplnOrgSecurityToTerraform, true)(this._security.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_config: {
        value: cdktf.listMapperHcl(dataCplnOrgAuthConfigToHclTerraform, true)(this._authConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnOrgAuthConfigList",
      },
      observability: {
        value: cdktf.listMapperHcl(dataCplnOrgObservabilityToHclTerraform, true)(this._observability.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnOrgObservabilityList",
      },
      security: {
        value: cdktf.listMapperHcl(dataCplnOrgSecurityToHclTerraform, true)(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnOrgSecurityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
