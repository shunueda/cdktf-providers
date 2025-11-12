// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#access_log_record_customized_headers_enabled AlbListener#access_log_record_customized_headers_enabled}
  */
  readonly accessLogRecordCustomizedHeadersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#ca_enabled AlbListener#ca_enabled}
  */
  readonly caEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#dry_run AlbListener#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#gzip_enabled AlbListener#gzip_enabled}
  */
  readonly gzipEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#http2_enabled AlbListener#http2_enabled}
  */
  readonly http2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#id AlbListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#idle_timeout AlbListener#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#listener_description AlbListener#listener_description}
  */
  readonly listenerDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#listener_port AlbListener#listener_port}
  */
  readonly listenerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#listener_protocol AlbListener#listener_protocol}
  */
  readonly listenerProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#load_balancer_id AlbListener#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#request_timeout AlbListener#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#security_policy_id AlbListener#security_policy_id}
  */
  readonly securityPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#status AlbListener#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#tags AlbListener#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * access_log_tracing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#access_log_tracing_config AlbListener#access_log_tracing_config}
  */
  readonly accessLogTracingConfig?: AlbListenerAccessLogTracingConfig;
  /**
  * acl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#acl_config AlbListener#acl_config}
  */
  readonly aclConfig?: AlbListenerAclConfig;
  /**
  * ca_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#ca_certificates AlbListener#ca_certificates}
  */
  readonly caCertificates?: AlbListenerCaCertificates[] | cdktf.IResolvable;
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#certificates AlbListener#certificates}
  */
  readonly certificates?: AlbListenerCertificates[] | cdktf.IResolvable;
  /**
  * default_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#default_actions AlbListener#default_actions}
  */
  readonly defaultActions: AlbListenerDefaultActions[] | cdktf.IResolvable;
  /**
  * quic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#quic_config AlbListener#quic_config}
  */
  readonly quicConfig?: AlbListenerQuicConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#timeouts AlbListener#timeouts}
  */
  readonly timeouts?: AlbListenerTimeouts;
  /**
  * x_forwarded_for_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_config AlbListener#x_forwarded_for_config}
  */
  readonly xForwardedForConfig?: AlbListenerXForwardedForConfig;
  /**
  * xforwarded_for_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwarded_for_config AlbListener#xforwarded_for_config}
  */
  readonly xforwardedForConfig?: AlbListenerXforwardedForConfig;
}
export interface AlbListenerAccessLogTracingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#tracing_enabled AlbListener#tracing_enabled}
  */
  readonly tracingEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#tracing_sample AlbListener#tracing_sample}
  */
  readonly tracingSample?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#tracing_type AlbListener#tracing_type}
  */
  readonly tracingType?: string;
}

export function albListenerAccessLogTracingConfigToTerraform(struct?: AlbListenerAccessLogTracingConfigOutputReference | AlbListenerAccessLogTracingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tracing_enabled: cdktf.booleanToTerraform(struct!.tracingEnabled),
    tracing_sample: cdktf.numberToTerraform(struct!.tracingSample),
    tracing_type: cdktf.stringToTerraform(struct!.tracingType),
  }
}


export function albListenerAccessLogTracingConfigToHclTerraform(struct?: AlbListenerAccessLogTracingConfigOutputReference | AlbListenerAccessLogTracingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tracing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tracingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracing_sample: {
      value: cdktf.numberToHclTerraform(struct!.tracingSample),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracing_type: {
      value: cdktf.stringToHclTerraform(struct!.tracingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbListenerAccessLogTracingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbListenerAccessLogTracingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tracingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingEnabled = this._tracingEnabled;
    }
    if (this._tracingSample !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingSample = this._tracingSample;
    }
    if (this._tracingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingType = this._tracingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerAccessLogTracingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tracingEnabled = undefined;
      this._tracingSample = undefined;
      this._tracingType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tracingEnabled = value.tracingEnabled;
      this._tracingSample = value.tracingSample;
      this._tracingType = value.tracingType;
    }
  }

  // tracing_enabled - computed: false, optional: false, required: true
  private _tracingEnabled?: boolean | cdktf.IResolvable; 
  public get tracingEnabled() {
    return this.getBooleanAttribute('tracing_enabled');
  }
  public set tracingEnabled(value: boolean | cdktf.IResolvable) {
    this._tracingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingEnabledInput() {
    return this._tracingEnabled;
  }

  // tracing_sample - computed: false, optional: true, required: false
  private _tracingSample?: number; 
  public get tracingSample() {
    return this.getNumberAttribute('tracing_sample');
  }
  public set tracingSample(value: number) {
    this._tracingSample = value;
  }
  public resetTracingSample() {
    this._tracingSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingSampleInput() {
    return this._tracingSample;
  }

  // tracing_type - computed: false, optional: true, required: false
  private _tracingType?: string; 
  public get tracingType() {
    return this.getStringAttribute('tracing_type');
  }
  public set tracingType(value: string) {
    this._tracingType = value;
  }
  public resetTracingType() {
    this._tracingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingTypeInput() {
    return this._tracingType;
  }
}
export interface AlbListenerAclConfigAclRelations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#acl_id AlbListener#acl_id}
  */
  readonly aclId?: string;
}

export function albListenerAclConfigAclRelationsToTerraform(struct?: AlbListenerAclConfigAclRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_id: cdktf.stringToTerraform(struct!.aclId),
  }
}


export function albListenerAclConfigAclRelationsToHclTerraform(struct?: AlbListenerAclConfigAclRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_id: {
      value: cdktf.stringToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbListenerAclConfigAclRelationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbListenerAclConfigAclRelations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerAclConfigAclRelations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclId = value.aclId;
    }
  }

  // acl_id - computed: true, optional: true, required: false
  private _aclId?: string; 
  public get aclId() {
    return this.getStringAttribute('acl_id');
  }
  public set aclId(value: string) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class AlbListenerAclConfigAclRelationsList extends cdktf.ComplexList {
  public internalValue? : AlbListenerAclConfigAclRelations[] | cdktf.IResolvable

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
  public get(index: number): AlbListenerAclConfigAclRelationsOutputReference {
    return new AlbListenerAclConfigAclRelationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbListenerAclConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#acl_type AlbListener#acl_type}
  */
  readonly aclType?: string;
  /**
  * acl_relations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#acl_relations AlbListener#acl_relations}
  */
  readonly aclRelations?: AlbListenerAclConfigAclRelations[] | cdktf.IResolvable;
}

export function albListenerAclConfigToTerraform(struct?: AlbListenerAclConfigOutputReference | AlbListenerAclConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_type: cdktf.stringToTerraform(struct!.aclType),
    acl_relations: cdktf.listMapper(albListenerAclConfigAclRelationsToTerraform, true)(struct!.aclRelations),
  }
}


export function albListenerAclConfigToHclTerraform(struct?: AlbListenerAclConfigOutputReference | AlbListenerAclConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_type: {
      value: cdktf.stringToHclTerraform(struct!.aclType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_relations: {
      value: cdktf.listMapperHcl(albListenerAclConfigAclRelationsToHclTerraform, true)(struct!.aclRelations),
      isBlock: true,
      type: "set",
      storageClassType: "AlbListenerAclConfigAclRelationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbListenerAclConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbListenerAclConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclType = this._aclType;
    }
    if (this._aclRelations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclRelations = this._aclRelations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerAclConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclType = undefined;
      this._aclRelations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclType = value.aclType;
      this._aclRelations.internalValue = value.aclRelations;
    }
  }

  // acl_type - computed: true, optional: true, required: false
  private _aclType?: string; 
  public get aclType() {
    return this.getStringAttribute('acl_type');
  }
  public set aclType(value: string) {
    this._aclType = value;
  }
  public resetAclType() {
    this._aclType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclTypeInput() {
    return this._aclType;
  }

  // acl_relations - computed: false, optional: true, required: false
  private _aclRelations = new AlbListenerAclConfigAclRelationsList(this, "acl_relations", true);
  public get aclRelations() {
    return this._aclRelations;
  }
  public putAclRelations(value: AlbListenerAclConfigAclRelations[] | cdktf.IResolvable) {
    this._aclRelations.internalValue = value;
  }
  public resetAclRelations() {
    this._aclRelations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclRelationsInput() {
    return this._aclRelations.internalValue;
  }
}
export interface AlbListenerCaCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#certificate_id AlbListener#certificate_id}
  */
  readonly certificateId?: string;
}

export function albListenerCaCertificatesToTerraform(struct?: AlbListenerCaCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
  }
}


export function albListenerCaCertificatesToHclTerraform(struct?: AlbListenerCaCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbListenerCaCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbListenerCaCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerCaCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateId = value.certificateId;
    }
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }
}

export class AlbListenerCaCertificatesList extends cdktf.ComplexList {
  public internalValue? : AlbListenerCaCertificates[] | cdktf.IResolvable

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
  public get(index: number): AlbListenerCaCertificatesOutputReference {
    return new AlbListenerCaCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbListenerCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#certificate_id AlbListener#certificate_id}
  */
  readonly certificateId?: string;
}

export function albListenerCertificatesToTerraform(struct?: AlbListenerCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
  }
}


export function albListenerCertificatesToHclTerraform(struct?: AlbListenerCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbListenerCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbListenerCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateId = value.certificateId;
    }
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }
}

export class AlbListenerCertificatesList extends cdktf.ComplexList {
  public internalValue? : AlbListenerCertificates[] | cdktf.IResolvable

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
  public get(index: number): AlbListenerCertificatesOutputReference {
    return new AlbListenerCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbListenerDefaultActionsForwardGroupConfigServerGroupTuples {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#server_group_id AlbListener#server_group_id}
  */
  readonly serverGroupId: string;
}

export function albListenerDefaultActionsForwardGroupConfigServerGroupTuplesToTerraform(struct?: AlbListenerDefaultActionsForwardGroupConfigServerGroupTuples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_group_id: cdktf.stringToTerraform(struct!.serverGroupId),
  }
}


export function albListenerDefaultActionsForwardGroupConfigServerGroupTuplesToHclTerraform(struct?: AlbListenerDefaultActionsForwardGroupConfigServerGroupTuples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_group_id: {
      value: cdktf.stringToHclTerraform(struct!.serverGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbListenerDefaultActionsForwardGroupConfigServerGroupTuplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbListenerDefaultActionsForwardGroupConfigServerGroupTuples | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverGroupId = this._serverGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerDefaultActionsForwardGroupConfigServerGroupTuples | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverGroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverGroupId = value.serverGroupId;
    }
  }

  // server_group_id - computed: false, optional: false, required: true
  private _serverGroupId?: string; 
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }
  public set serverGroupId(value: string) {
    this._serverGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupIdInput() {
    return this._serverGroupId;
  }
}

export class AlbListenerDefaultActionsForwardGroupConfigServerGroupTuplesList extends cdktf.ComplexList {
  public internalValue? : AlbListenerDefaultActionsForwardGroupConfigServerGroupTuples[] | cdktf.IResolvable

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
  public get(index: number): AlbListenerDefaultActionsForwardGroupConfigServerGroupTuplesOutputReference {
    return new AlbListenerDefaultActionsForwardGroupConfigServerGroupTuplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbListenerDefaultActionsForwardGroupConfig {
  /**
  * server_group_tuples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#server_group_tuples AlbListener#server_group_tuples}
  */
  readonly serverGroupTuples: AlbListenerDefaultActionsForwardGroupConfigServerGroupTuples[] | cdktf.IResolvable;
}

export function albListenerDefaultActionsForwardGroupConfigToTerraform(struct?: AlbListenerDefaultActionsForwardGroupConfigOutputReference | AlbListenerDefaultActionsForwardGroupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_group_tuples: cdktf.listMapper(albListenerDefaultActionsForwardGroupConfigServerGroupTuplesToTerraform, true)(struct!.serverGroupTuples),
  }
}


export function albListenerDefaultActionsForwardGroupConfigToHclTerraform(struct?: AlbListenerDefaultActionsForwardGroupConfigOutputReference | AlbListenerDefaultActionsForwardGroupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_group_tuples: {
      value: cdktf.listMapperHcl(albListenerDefaultActionsForwardGroupConfigServerGroupTuplesToHclTerraform, true)(struct!.serverGroupTuples),
      isBlock: true,
      type: "list",
      storageClassType: "AlbListenerDefaultActionsForwardGroupConfigServerGroupTuplesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbListenerDefaultActionsForwardGroupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbListenerDefaultActionsForwardGroupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverGroupTuples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverGroupTuples = this._serverGroupTuples?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerDefaultActionsForwardGroupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverGroupTuples.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverGroupTuples.internalValue = value.serverGroupTuples;
    }
  }

  // server_group_tuples - computed: false, optional: false, required: true
  private _serverGroupTuples = new AlbListenerDefaultActionsForwardGroupConfigServerGroupTuplesList(this, "server_group_tuples", false);
  public get serverGroupTuples() {
    return this._serverGroupTuples;
  }
  public putServerGroupTuples(value: AlbListenerDefaultActionsForwardGroupConfigServerGroupTuples[] | cdktf.IResolvable) {
    this._serverGroupTuples.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupTuplesInput() {
    return this._serverGroupTuples.internalValue;
  }
}
export interface AlbListenerDefaultActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#type AlbListener#type}
  */
  readonly type: string;
  /**
  * forward_group_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#forward_group_config AlbListener#forward_group_config}
  */
  readonly forwardGroupConfig?: AlbListenerDefaultActionsForwardGroupConfig;
}

export function albListenerDefaultActionsToTerraform(struct?: AlbListenerDefaultActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    forward_group_config: albListenerDefaultActionsForwardGroupConfigToTerraform(struct!.forwardGroupConfig),
  }
}


export function albListenerDefaultActionsToHclTerraform(struct?: AlbListenerDefaultActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_group_config: {
      value: albListenerDefaultActionsForwardGroupConfigToHclTerraform(struct!.forwardGroupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AlbListenerDefaultActionsForwardGroupConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbListenerDefaultActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbListenerDefaultActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._forwardGroupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardGroupConfig = this._forwardGroupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerDefaultActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._forwardGroupConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._forwardGroupConfig.internalValue = value.forwardGroupConfig;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // forward_group_config - computed: false, optional: true, required: false
  private _forwardGroupConfig = new AlbListenerDefaultActionsForwardGroupConfigOutputReference(this, "forward_group_config");
  public get forwardGroupConfig() {
    return this._forwardGroupConfig;
  }
  public putForwardGroupConfig(value: AlbListenerDefaultActionsForwardGroupConfig) {
    this._forwardGroupConfig.internalValue = value;
  }
  public resetForwardGroupConfig() {
    this._forwardGroupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardGroupConfigInput() {
    return this._forwardGroupConfig.internalValue;
  }
}

export class AlbListenerDefaultActionsList extends cdktf.ComplexList {
  public internalValue? : AlbListenerDefaultActions[] | cdktf.IResolvable

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
  public get(index: number): AlbListenerDefaultActionsOutputReference {
    return new AlbListenerDefaultActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbListenerQuicConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#quic_listener_id AlbListener#quic_listener_id}
  */
  readonly quicListenerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#quic_upgrade_enabled AlbListener#quic_upgrade_enabled}
  */
  readonly quicUpgradeEnabled?: boolean | cdktf.IResolvable;
}

export function albListenerQuicConfigToTerraform(struct?: AlbListenerQuicConfigOutputReference | AlbListenerQuicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quic_listener_id: cdktf.stringToTerraform(struct!.quicListenerId),
    quic_upgrade_enabled: cdktf.booleanToTerraform(struct!.quicUpgradeEnabled),
  }
}


export function albListenerQuicConfigToHclTerraform(struct?: AlbListenerQuicConfigOutputReference | AlbListenerQuicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quic_listener_id: {
      value: cdktf.stringToHclTerraform(struct!.quicListenerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic_upgrade_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.quicUpgradeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbListenerQuicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbListenerQuicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quicListenerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicListenerId = this._quicListenerId;
    }
    if (this._quicUpgradeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicUpgradeEnabled = this._quicUpgradeEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerQuicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._quicListenerId = undefined;
      this._quicUpgradeEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._quicListenerId = value.quicListenerId;
      this._quicUpgradeEnabled = value.quicUpgradeEnabled;
    }
  }

  // quic_listener_id - computed: false, optional: true, required: false
  private _quicListenerId?: string; 
  public get quicListenerId() {
    return this.getStringAttribute('quic_listener_id');
  }
  public set quicListenerId(value: string) {
    this._quicListenerId = value;
  }
  public resetQuicListenerId() {
    this._quicListenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicListenerIdInput() {
    return this._quicListenerId;
  }

  // quic_upgrade_enabled - computed: true, optional: true, required: false
  private _quicUpgradeEnabled?: boolean | cdktf.IResolvable; 
  public get quicUpgradeEnabled() {
    return this.getBooleanAttribute('quic_upgrade_enabled');
  }
  public set quicUpgradeEnabled(value: boolean | cdktf.IResolvable) {
    this._quicUpgradeEnabled = value;
  }
  public resetQuicUpgradeEnabled() {
    this._quicUpgradeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicUpgradeEnabledInput() {
    return this._quicUpgradeEnabled;
  }
}
export interface AlbListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#create AlbListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#delete AlbListener#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#update AlbListener#update}
  */
  readonly update?: string;
}

export function albListenerTimeoutsToTerraform(struct?: AlbListenerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function albListenerTimeoutsToHclTerraform(struct?: AlbListenerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlbListenerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface AlbListenerXForwardedForConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_client_cert_client_verify_alias AlbListener#x_forwarded_for_client_cert_client_verify_alias}
  */
  readonly xForwardedForClientCertClientVerifyAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_client_cert_client_verify_enabled AlbListener#x_forwarded_for_client_cert_client_verify_enabled}
  */
  readonly xForwardedForClientCertClientVerifyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_client_cert_finger_print_alias AlbListener#x_forwarded_for_client_cert_finger_print_alias}
  */
  readonly xForwardedForClientCertFingerPrintAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_client_cert_finger_print_enabled AlbListener#x_forwarded_for_client_cert_finger_print_enabled}
  */
  readonly xForwardedForClientCertFingerPrintEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_client_cert_issuer_dn_alias AlbListener#x_forwarded_for_client_cert_issuer_dn_alias}
  */
  readonly xForwardedForClientCertIssuerDnAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_client_cert_issuer_dn_enabled AlbListener#x_forwarded_for_client_cert_issuer_dn_enabled}
  */
  readonly xForwardedForClientCertIssuerDnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_client_cert_subject_dn_alias AlbListener#x_forwarded_for_client_cert_subject_dn_alias}
  */
  readonly xForwardedForClientCertSubjectDnAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_client_cert_subject_dn_enabled AlbListener#x_forwarded_for_client_cert_subject_dn_enabled}
  */
  readonly xForwardedForClientCertSubjectDnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_client_source_ips_enabled AlbListener#x_forwarded_for_client_source_ips_enabled}
  */
  readonly xForwardedForClientSourceIpsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_client_source_ips_trusted AlbListener#x_forwarded_for_client_source_ips_trusted}
  */
  readonly xForwardedForClientSourceIpsTrusted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_client_src_port_enabled AlbListener#x_forwarded_for_client_src_port_enabled}
  */
  readonly xForwardedForClientSrcPortEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_enabled AlbListener#x_forwarded_for_enabled}
  */
  readonly xForwardedForEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_host_enabled AlbListener#x_forwarded_for_host_enabled}
  */
  readonly xForwardedForHostEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_processing_mode AlbListener#x_forwarded_for_processing_mode}
  */
  readonly xForwardedForProcessingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_proto_enabled AlbListener#x_forwarded_for_proto_enabled}
  */
  readonly xForwardedForProtoEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_slb_id_enabled AlbListener#x_forwarded_for_slb_id_enabled}
  */
  readonly xForwardedForSlbIdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#x_forwarded_for_slb_port_enabled AlbListener#x_forwarded_for_slb_port_enabled}
  */
  readonly xForwardedForSlbPortEnabled?: boolean | cdktf.IResolvable;
}

export function albListenerXForwardedForConfigToTerraform(struct?: AlbListenerXForwardedForConfigOutputReference | AlbListenerXForwardedForConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x_forwarded_for_client_cert_client_verify_alias: cdktf.stringToTerraform(struct!.xForwardedForClientCertClientVerifyAlias),
    x_forwarded_for_client_cert_client_verify_enabled: cdktf.booleanToTerraform(struct!.xForwardedForClientCertClientVerifyEnabled),
    x_forwarded_for_client_cert_finger_print_alias: cdktf.stringToTerraform(struct!.xForwardedForClientCertFingerPrintAlias),
    x_forwarded_for_client_cert_finger_print_enabled: cdktf.booleanToTerraform(struct!.xForwardedForClientCertFingerPrintEnabled),
    x_forwarded_for_client_cert_issuer_dn_alias: cdktf.stringToTerraform(struct!.xForwardedForClientCertIssuerDnAlias),
    x_forwarded_for_client_cert_issuer_dn_enabled: cdktf.booleanToTerraform(struct!.xForwardedForClientCertIssuerDnEnabled),
    x_forwarded_for_client_cert_subject_dn_alias: cdktf.stringToTerraform(struct!.xForwardedForClientCertSubjectDnAlias),
    x_forwarded_for_client_cert_subject_dn_enabled: cdktf.booleanToTerraform(struct!.xForwardedForClientCertSubjectDnEnabled),
    x_forwarded_for_client_source_ips_enabled: cdktf.booleanToTerraform(struct!.xForwardedForClientSourceIpsEnabled),
    x_forwarded_for_client_source_ips_trusted: cdktf.stringToTerraform(struct!.xForwardedForClientSourceIpsTrusted),
    x_forwarded_for_client_src_port_enabled: cdktf.booleanToTerraform(struct!.xForwardedForClientSrcPortEnabled),
    x_forwarded_for_enabled: cdktf.booleanToTerraform(struct!.xForwardedForEnabled),
    x_forwarded_for_host_enabled: cdktf.booleanToTerraform(struct!.xForwardedForHostEnabled),
    x_forwarded_for_processing_mode: cdktf.stringToTerraform(struct!.xForwardedForProcessingMode),
    x_forwarded_for_proto_enabled: cdktf.booleanToTerraform(struct!.xForwardedForProtoEnabled),
    x_forwarded_for_slb_id_enabled: cdktf.booleanToTerraform(struct!.xForwardedForSlbIdEnabled),
    x_forwarded_for_slb_port_enabled: cdktf.booleanToTerraform(struct!.xForwardedForSlbPortEnabled),
  }
}


export function albListenerXForwardedForConfigToHclTerraform(struct?: AlbListenerXForwardedForConfigOutputReference | AlbListenerXForwardedForConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x_forwarded_for_client_cert_client_verify_alias: {
      value: cdktf.stringToHclTerraform(struct!.xForwardedForClientCertClientVerifyAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_forwarded_for_client_cert_client_verify_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xForwardedForClientCertClientVerifyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_forwarded_for_client_cert_finger_print_alias: {
      value: cdktf.stringToHclTerraform(struct!.xForwardedForClientCertFingerPrintAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_forwarded_for_client_cert_finger_print_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xForwardedForClientCertFingerPrintEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_forwarded_for_client_cert_issuer_dn_alias: {
      value: cdktf.stringToHclTerraform(struct!.xForwardedForClientCertIssuerDnAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_forwarded_for_client_cert_issuer_dn_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xForwardedForClientCertIssuerDnEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_forwarded_for_client_cert_subject_dn_alias: {
      value: cdktf.stringToHclTerraform(struct!.xForwardedForClientCertSubjectDnAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_forwarded_for_client_cert_subject_dn_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xForwardedForClientCertSubjectDnEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_forwarded_for_client_source_ips_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xForwardedForClientSourceIpsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_forwarded_for_client_source_ips_trusted: {
      value: cdktf.stringToHclTerraform(struct!.xForwardedForClientSourceIpsTrusted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_forwarded_for_client_src_port_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xForwardedForClientSrcPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_forwarded_for_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xForwardedForEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_forwarded_for_host_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xForwardedForHostEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_forwarded_for_processing_mode: {
      value: cdktf.stringToHclTerraform(struct!.xForwardedForProcessingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_forwarded_for_proto_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xForwardedForProtoEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_forwarded_for_slb_id_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xForwardedForSlbIdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_forwarded_for_slb_port_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xForwardedForSlbPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbListenerXForwardedForConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbListenerXForwardedForConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xForwardedForClientCertClientVerifyAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForClientCertClientVerifyAlias = this._xForwardedForClientCertClientVerifyAlias;
    }
    if (this._xForwardedForClientCertClientVerifyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForClientCertClientVerifyEnabled = this._xForwardedForClientCertClientVerifyEnabled;
    }
    if (this._xForwardedForClientCertFingerPrintAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForClientCertFingerPrintAlias = this._xForwardedForClientCertFingerPrintAlias;
    }
    if (this._xForwardedForClientCertFingerPrintEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForClientCertFingerPrintEnabled = this._xForwardedForClientCertFingerPrintEnabled;
    }
    if (this._xForwardedForClientCertIssuerDnAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForClientCertIssuerDnAlias = this._xForwardedForClientCertIssuerDnAlias;
    }
    if (this._xForwardedForClientCertIssuerDnEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForClientCertIssuerDnEnabled = this._xForwardedForClientCertIssuerDnEnabled;
    }
    if (this._xForwardedForClientCertSubjectDnAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForClientCertSubjectDnAlias = this._xForwardedForClientCertSubjectDnAlias;
    }
    if (this._xForwardedForClientCertSubjectDnEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForClientCertSubjectDnEnabled = this._xForwardedForClientCertSubjectDnEnabled;
    }
    if (this._xForwardedForClientSourceIpsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForClientSourceIpsEnabled = this._xForwardedForClientSourceIpsEnabled;
    }
    if (this._xForwardedForClientSourceIpsTrusted !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForClientSourceIpsTrusted = this._xForwardedForClientSourceIpsTrusted;
    }
    if (this._xForwardedForClientSrcPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForClientSrcPortEnabled = this._xForwardedForClientSrcPortEnabled;
    }
    if (this._xForwardedForEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForEnabled = this._xForwardedForEnabled;
    }
    if (this._xForwardedForHostEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForHostEnabled = this._xForwardedForHostEnabled;
    }
    if (this._xForwardedForProcessingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForProcessingMode = this._xForwardedForProcessingMode;
    }
    if (this._xForwardedForProtoEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForProtoEnabled = this._xForwardedForProtoEnabled;
    }
    if (this._xForwardedForSlbIdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForSlbIdEnabled = this._xForwardedForSlbIdEnabled;
    }
    if (this._xForwardedForSlbPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedForSlbPortEnabled = this._xForwardedForSlbPortEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerXForwardedForConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xForwardedForClientCertClientVerifyAlias = undefined;
      this._xForwardedForClientCertClientVerifyEnabled = undefined;
      this._xForwardedForClientCertFingerPrintAlias = undefined;
      this._xForwardedForClientCertFingerPrintEnabled = undefined;
      this._xForwardedForClientCertIssuerDnAlias = undefined;
      this._xForwardedForClientCertIssuerDnEnabled = undefined;
      this._xForwardedForClientCertSubjectDnAlias = undefined;
      this._xForwardedForClientCertSubjectDnEnabled = undefined;
      this._xForwardedForClientSourceIpsEnabled = undefined;
      this._xForwardedForClientSourceIpsTrusted = undefined;
      this._xForwardedForClientSrcPortEnabled = undefined;
      this._xForwardedForEnabled = undefined;
      this._xForwardedForHostEnabled = undefined;
      this._xForwardedForProcessingMode = undefined;
      this._xForwardedForProtoEnabled = undefined;
      this._xForwardedForSlbIdEnabled = undefined;
      this._xForwardedForSlbPortEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xForwardedForClientCertClientVerifyAlias = value.xForwardedForClientCertClientVerifyAlias;
      this._xForwardedForClientCertClientVerifyEnabled = value.xForwardedForClientCertClientVerifyEnabled;
      this._xForwardedForClientCertFingerPrintAlias = value.xForwardedForClientCertFingerPrintAlias;
      this._xForwardedForClientCertFingerPrintEnabled = value.xForwardedForClientCertFingerPrintEnabled;
      this._xForwardedForClientCertIssuerDnAlias = value.xForwardedForClientCertIssuerDnAlias;
      this._xForwardedForClientCertIssuerDnEnabled = value.xForwardedForClientCertIssuerDnEnabled;
      this._xForwardedForClientCertSubjectDnAlias = value.xForwardedForClientCertSubjectDnAlias;
      this._xForwardedForClientCertSubjectDnEnabled = value.xForwardedForClientCertSubjectDnEnabled;
      this._xForwardedForClientSourceIpsEnabled = value.xForwardedForClientSourceIpsEnabled;
      this._xForwardedForClientSourceIpsTrusted = value.xForwardedForClientSourceIpsTrusted;
      this._xForwardedForClientSrcPortEnabled = value.xForwardedForClientSrcPortEnabled;
      this._xForwardedForEnabled = value.xForwardedForEnabled;
      this._xForwardedForHostEnabled = value.xForwardedForHostEnabled;
      this._xForwardedForProcessingMode = value.xForwardedForProcessingMode;
      this._xForwardedForProtoEnabled = value.xForwardedForProtoEnabled;
      this._xForwardedForSlbIdEnabled = value.xForwardedForSlbIdEnabled;
      this._xForwardedForSlbPortEnabled = value.xForwardedForSlbPortEnabled;
    }
  }

  // x_forwarded_for_client_cert_client_verify_alias - computed: false, optional: true, required: false
  private _xForwardedForClientCertClientVerifyAlias?: string; 
  public get xForwardedForClientCertClientVerifyAlias() {
    return this.getStringAttribute('x_forwarded_for_client_cert_client_verify_alias');
  }
  public set xForwardedForClientCertClientVerifyAlias(value: string) {
    this._xForwardedForClientCertClientVerifyAlias = value;
  }
  public resetXForwardedForClientCertClientVerifyAlias() {
    this._xForwardedForClientCertClientVerifyAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForClientCertClientVerifyAliasInput() {
    return this._xForwardedForClientCertClientVerifyAlias;
  }

  // x_forwarded_for_client_cert_client_verify_enabled - computed: true, optional: true, required: false
  private _xForwardedForClientCertClientVerifyEnabled?: boolean | cdktf.IResolvable; 
  public get xForwardedForClientCertClientVerifyEnabled() {
    return this.getBooleanAttribute('x_forwarded_for_client_cert_client_verify_enabled');
  }
  public set xForwardedForClientCertClientVerifyEnabled(value: boolean | cdktf.IResolvable) {
    this._xForwardedForClientCertClientVerifyEnabled = value;
  }
  public resetXForwardedForClientCertClientVerifyEnabled() {
    this._xForwardedForClientCertClientVerifyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForClientCertClientVerifyEnabledInput() {
    return this._xForwardedForClientCertClientVerifyEnabled;
  }

  // x_forwarded_for_client_cert_finger_print_alias - computed: false, optional: true, required: false
  private _xForwardedForClientCertFingerPrintAlias?: string; 
  public get xForwardedForClientCertFingerPrintAlias() {
    return this.getStringAttribute('x_forwarded_for_client_cert_finger_print_alias');
  }
  public set xForwardedForClientCertFingerPrintAlias(value: string) {
    this._xForwardedForClientCertFingerPrintAlias = value;
  }
  public resetXForwardedForClientCertFingerPrintAlias() {
    this._xForwardedForClientCertFingerPrintAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForClientCertFingerPrintAliasInput() {
    return this._xForwardedForClientCertFingerPrintAlias;
  }

  // x_forwarded_for_client_cert_finger_print_enabled - computed: true, optional: true, required: false
  private _xForwardedForClientCertFingerPrintEnabled?: boolean | cdktf.IResolvable; 
  public get xForwardedForClientCertFingerPrintEnabled() {
    return this.getBooleanAttribute('x_forwarded_for_client_cert_finger_print_enabled');
  }
  public set xForwardedForClientCertFingerPrintEnabled(value: boolean | cdktf.IResolvable) {
    this._xForwardedForClientCertFingerPrintEnabled = value;
  }
  public resetXForwardedForClientCertFingerPrintEnabled() {
    this._xForwardedForClientCertFingerPrintEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForClientCertFingerPrintEnabledInput() {
    return this._xForwardedForClientCertFingerPrintEnabled;
  }

  // x_forwarded_for_client_cert_issuer_dn_alias - computed: false, optional: true, required: false
  private _xForwardedForClientCertIssuerDnAlias?: string; 
  public get xForwardedForClientCertIssuerDnAlias() {
    return this.getStringAttribute('x_forwarded_for_client_cert_issuer_dn_alias');
  }
  public set xForwardedForClientCertIssuerDnAlias(value: string) {
    this._xForwardedForClientCertIssuerDnAlias = value;
  }
  public resetXForwardedForClientCertIssuerDnAlias() {
    this._xForwardedForClientCertIssuerDnAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForClientCertIssuerDnAliasInput() {
    return this._xForwardedForClientCertIssuerDnAlias;
  }

  // x_forwarded_for_client_cert_issuer_dn_enabled - computed: true, optional: true, required: false
  private _xForwardedForClientCertIssuerDnEnabled?: boolean | cdktf.IResolvable; 
  public get xForwardedForClientCertIssuerDnEnabled() {
    return this.getBooleanAttribute('x_forwarded_for_client_cert_issuer_dn_enabled');
  }
  public set xForwardedForClientCertIssuerDnEnabled(value: boolean | cdktf.IResolvable) {
    this._xForwardedForClientCertIssuerDnEnabled = value;
  }
  public resetXForwardedForClientCertIssuerDnEnabled() {
    this._xForwardedForClientCertIssuerDnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForClientCertIssuerDnEnabledInput() {
    return this._xForwardedForClientCertIssuerDnEnabled;
  }

  // x_forwarded_for_client_cert_subject_dn_alias - computed: false, optional: true, required: false
  private _xForwardedForClientCertSubjectDnAlias?: string; 
  public get xForwardedForClientCertSubjectDnAlias() {
    return this.getStringAttribute('x_forwarded_for_client_cert_subject_dn_alias');
  }
  public set xForwardedForClientCertSubjectDnAlias(value: string) {
    this._xForwardedForClientCertSubjectDnAlias = value;
  }
  public resetXForwardedForClientCertSubjectDnAlias() {
    this._xForwardedForClientCertSubjectDnAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForClientCertSubjectDnAliasInput() {
    return this._xForwardedForClientCertSubjectDnAlias;
  }

  // x_forwarded_for_client_cert_subject_dn_enabled - computed: true, optional: true, required: false
  private _xForwardedForClientCertSubjectDnEnabled?: boolean | cdktf.IResolvable; 
  public get xForwardedForClientCertSubjectDnEnabled() {
    return this.getBooleanAttribute('x_forwarded_for_client_cert_subject_dn_enabled');
  }
  public set xForwardedForClientCertSubjectDnEnabled(value: boolean | cdktf.IResolvable) {
    this._xForwardedForClientCertSubjectDnEnabled = value;
  }
  public resetXForwardedForClientCertSubjectDnEnabled() {
    this._xForwardedForClientCertSubjectDnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForClientCertSubjectDnEnabledInput() {
    return this._xForwardedForClientCertSubjectDnEnabled;
  }

  // x_forwarded_for_client_source_ips_enabled - computed: false, optional: true, required: false
  private _xForwardedForClientSourceIpsEnabled?: boolean | cdktf.IResolvable; 
  public get xForwardedForClientSourceIpsEnabled() {
    return this.getBooleanAttribute('x_forwarded_for_client_source_ips_enabled');
  }
  public set xForwardedForClientSourceIpsEnabled(value: boolean | cdktf.IResolvable) {
    this._xForwardedForClientSourceIpsEnabled = value;
  }
  public resetXForwardedForClientSourceIpsEnabled() {
    this._xForwardedForClientSourceIpsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForClientSourceIpsEnabledInput() {
    return this._xForwardedForClientSourceIpsEnabled;
  }

  // x_forwarded_for_client_source_ips_trusted - computed: false, optional: true, required: false
  private _xForwardedForClientSourceIpsTrusted?: string; 
  public get xForwardedForClientSourceIpsTrusted() {
    return this.getStringAttribute('x_forwarded_for_client_source_ips_trusted');
  }
  public set xForwardedForClientSourceIpsTrusted(value: string) {
    this._xForwardedForClientSourceIpsTrusted = value;
  }
  public resetXForwardedForClientSourceIpsTrusted() {
    this._xForwardedForClientSourceIpsTrusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForClientSourceIpsTrustedInput() {
    return this._xForwardedForClientSourceIpsTrusted;
  }

  // x_forwarded_for_client_src_port_enabled - computed: true, optional: true, required: false
  private _xForwardedForClientSrcPortEnabled?: boolean | cdktf.IResolvable; 
  public get xForwardedForClientSrcPortEnabled() {
    return this.getBooleanAttribute('x_forwarded_for_client_src_port_enabled');
  }
  public set xForwardedForClientSrcPortEnabled(value: boolean | cdktf.IResolvable) {
    this._xForwardedForClientSrcPortEnabled = value;
  }
  public resetXForwardedForClientSrcPortEnabled() {
    this._xForwardedForClientSrcPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForClientSrcPortEnabledInput() {
    return this._xForwardedForClientSrcPortEnabled;
  }

  // x_forwarded_for_enabled - computed: true, optional: true, required: false
  private _xForwardedForEnabled?: boolean | cdktf.IResolvable; 
  public get xForwardedForEnabled() {
    return this.getBooleanAttribute('x_forwarded_for_enabled');
  }
  public set xForwardedForEnabled(value: boolean | cdktf.IResolvable) {
    this._xForwardedForEnabled = value;
  }
  public resetXForwardedForEnabled() {
    this._xForwardedForEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForEnabledInput() {
    return this._xForwardedForEnabled;
  }

  // x_forwarded_for_host_enabled - computed: false, optional: true, required: false
  private _xForwardedForHostEnabled?: boolean | cdktf.IResolvable; 
  public get xForwardedForHostEnabled() {
    return this.getBooleanAttribute('x_forwarded_for_host_enabled');
  }
  public set xForwardedForHostEnabled(value: boolean | cdktf.IResolvable) {
    this._xForwardedForHostEnabled = value;
  }
  public resetXForwardedForHostEnabled() {
    this._xForwardedForHostEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForHostEnabledInput() {
    return this._xForwardedForHostEnabled;
  }

  // x_forwarded_for_processing_mode - computed: true, optional: true, required: false
  private _xForwardedForProcessingMode?: string; 
  public get xForwardedForProcessingMode() {
    return this.getStringAttribute('x_forwarded_for_processing_mode');
  }
  public set xForwardedForProcessingMode(value: string) {
    this._xForwardedForProcessingMode = value;
  }
  public resetXForwardedForProcessingMode() {
    this._xForwardedForProcessingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForProcessingModeInput() {
    return this._xForwardedForProcessingMode;
  }

  // x_forwarded_for_proto_enabled - computed: true, optional: true, required: false
  private _xForwardedForProtoEnabled?: boolean | cdktf.IResolvable; 
  public get xForwardedForProtoEnabled() {
    return this.getBooleanAttribute('x_forwarded_for_proto_enabled');
  }
  public set xForwardedForProtoEnabled(value: boolean | cdktf.IResolvable) {
    this._xForwardedForProtoEnabled = value;
  }
  public resetXForwardedForProtoEnabled() {
    this._xForwardedForProtoEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForProtoEnabledInput() {
    return this._xForwardedForProtoEnabled;
  }

  // x_forwarded_for_slb_id_enabled - computed: true, optional: true, required: false
  private _xForwardedForSlbIdEnabled?: boolean | cdktf.IResolvable; 
  public get xForwardedForSlbIdEnabled() {
    return this.getBooleanAttribute('x_forwarded_for_slb_id_enabled');
  }
  public set xForwardedForSlbIdEnabled(value: boolean | cdktf.IResolvable) {
    this._xForwardedForSlbIdEnabled = value;
  }
  public resetXForwardedForSlbIdEnabled() {
    this._xForwardedForSlbIdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForSlbIdEnabledInput() {
    return this._xForwardedForSlbIdEnabled;
  }

  // x_forwarded_for_slb_port_enabled - computed: true, optional: true, required: false
  private _xForwardedForSlbPortEnabled?: boolean | cdktf.IResolvable; 
  public get xForwardedForSlbPortEnabled() {
    return this.getBooleanAttribute('x_forwarded_for_slb_port_enabled');
  }
  public set xForwardedForSlbPortEnabled(value: boolean | cdktf.IResolvable) {
    this._xForwardedForSlbPortEnabled = value;
  }
  public resetXForwardedForSlbPortEnabled() {
    this._xForwardedForSlbPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForSlbPortEnabledInput() {
    return this._xForwardedForSlbPortEnabled;
  }
}
export interface AlbListenerXforwardedForConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwardedforclientcert_issuerdnalias AlbListener#xforwardedforclientcert_issuerdnalias}
  */
  readonly xforwardedforclientcertIssuerdnalias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwardedforclientcert_issuerdnenabled AlbListener#xforwardedforclientcert_issuerdnenabled}
  */
  readonly xforwardedforclientcertIssuerdnenabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwardedforclientcertclientverifyalias AlbListener#xforwardedforclientcertclientverifyalias}
  */
  readonly xforwardedforclientcertclientverifyalias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwardedforclientcertclientverifyenabled AlbListener#xforwardedforclientcertclientverifyenabled}
  */
  readonly xforwardedforclientcertclientverifyenabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwardedforclientcertfingerprintalias AlbListener#xforwardedforclientcertfingerprintalias}
  */
  readonly xforwardedforclientcertfingerprintalias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwardedforclientcertfingerprintenabled AlbListener#xforwardedforclientcertfingerprintenabled}
  */
  readonly xforwardedforclientcertfingerprintenabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwardedforclientcertsubjectdnalias AlbListener#xforwardedforclientcertsubjectdnalias}
  */
  readonly xforwardedforclientcertsubjectdnalias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwardedforclientcertsubjectdnenabled AlbListener#xforwardedforclientcertsubjectdnenabled}
  */
  readonly xforwardedforclientcertsubjectdnenabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwardedforclientsrcportenabled AlbListener#xforwardedforclientsrcportenabled}
  */
  readonly xforwardedforclientsrcportenabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwardedforenabled AlbListener#xforwardedforenabled}
  */
  readonly xforwardedforenabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwardedforprotoenabled AlbListener#xforwardedforprotoenabled}
  */
  readonly xforwardedforprotoenabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwardedforslbidenabled AlbListener#xforwardedforslbidenabled}
  */
  readonly xforwardedforslbidenabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#xforwardedforslbportenabled AlbListener#xforwardedforslbportenabled}
  */
  readonly xforwardedforslbportenabled?: boolean | cdktf.IResolvable;
}

export function albListenerXforwardedForConfigToTerraform(struct?: AlbListenerXforwardedForConfigOutputReference | AlbListenerXforwardedForConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xforwardedforclientcert_issuerdnalias: cdktf.stringToTerraform(struct!.xforwardedforclientcertIssuerdnalias),
    xforwardedforclientcert_issuerdnenabled: cdktf.booleanToTerraform(struct!.xforwardedforclientcertIssuerdnenabled),
    xforwardedforclientcertclientverifyalias: cdktf.stringToTerraform(struct!.xforwardedforclientcertclientverifyalias),
    xforwardedforclientcertclientverifyenabled: cdktf.booleanToTerraform(struct!.xforwardedforclientcertclientverifyenabled),
    xforwardedforclientcertfingerprintalias: cdktf.stringToTerraform(struct!.xforwardedforclientcertfingerprintalias),
    xforwardedforclientcertfingerprintenabled: cdktf.booleanToTerraform(struct!.xforwardedforclientcertfingerprintenabled),
    xforwardedforclientcertsubjectdnalias: cdktf.stringToTerraform(struct!.xforwardedforclientcertsubjectdnalias),
    xforwardedforclientcertsubjectdnenabled: cdktf.booleanToTerraform(struct!.xforwardedforclientcertsubjectdnenabled),
    xforwardedforclientsrcportenabled: cdktf.booleanToTerraform(struct!.xforwardedforclientsrcportenabled),
    xforwardedforenabled: cdktf.booleanToTerraform(struct!.xforwardedforenabled),
    xforwardedforprotoenabled: cdktf.booleanToTerraform(struct!.xforwardedforprotoenabled),
    xforwardedforslbidenabled: cdktf.booleanToTerraform(struct!.xforwardedforslbidenabled),
    xforwardedforslbportenabled: cdktf.booleanToTerraform(struct!.xforwardedforslbportenabled),
  }
}


export function albListenerXforwardedForConfigToHclTerraform(struct?: AlbListenerXforwardedForConfigOutputReference | AlbListenerXforwardedForConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xforwardedforclientcert_issuerdnalias: {
      value: cdktf.stringToHclTerraform(struct!.xforwardedforclientcertIssuerdnalias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xforwardedforclientcert_issuerdnenabled: {
      value: cdktf.booleanToHclTerraform(struct!.xforwardedforclientcertIssuerdnenabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xforwardedforclientcertclientverifyalias: {
      value: cdktf.stringToHclTerraform(struct!.xforwardedforclientcertclientverifyalias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xforwardedforclientcertclientverifyenabled: {
      value: cdktf.booleanToHclTerraform(struct!.xforwardedforclientcertclientverifyenabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xforwardedforclientcertfingerprintalias: {
      value: cdktf.stringToHclTerraform(struct!.xforwardedforclientcertfingerprintalias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xforwardedforclientcertfingerprintenabled: {
      value: cdktf.booleanToHclTerraform(struct!.xforwardedforclientcertfingerprintenabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xforwardedforclientcertsubjectdnalias: {
      value: cdktf.stringToHclTerraform(struct!.xforwardedforclientcertsubjectdnalias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xforwardedforclientcertsubjectdnenabled: {
      value: cdktf.booleanToHclTerraform(struct!.xforwardedforclientcertsubjectdnenabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xforwardedforclientsrcportenabled: {
      value: cdktf.booleanToHclTerraform(struct!.xforwardedforclientsrcportenabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xforwardedforenabled: {
      value: cdktf.booleanToHclTerraform(struct!.xforwardedforenabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xforwardedforprotoenabled: {
      value: cdktf.booleanToHclTerraform(struct!.xforwardedforprotoenabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xforwardedforslbidenabled: {
      value: cdktf.booleanToHclTerraform(struct!.xforwardedforslbidenabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xforwardedforslbportenabled: {
      value: cdktf.booleanToHclTerraform(struct!.xforwardedforslbportenabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbListenerXforwardedForConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbListenerXforwardedForConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xforwardedforclientcertIssuerdnalias !== undefined) {
      hasAnyValues = true;
      internalValueResult.xforwardedforclientcertIssuerdnalias = this._xforwardedforclientcertIssuerdnalias;
    }
    if (this._xforwardedforclientcertIssuerdnenabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xforwardedforclientcertIssuerdnenabled = this._xforwardedforclientcertIssuerdnenabled;
    }
    if (this._xforwardedforclientcertclientverifyalias !== undefined) {
      hasAnyValues = true;
      internalValueResult.xforwardedforclientcertclientverifyalias = this._xforwardedforclientcertclientverifyalias;
    }
    if (this._xforwardedforclientcertclientverifyenabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xforwardedforclientcertclientverifyenabled = this._xforwardedforclientcertclientverifyenabled;
    }
    if (this._xforwardedforclientcertfingerprintalias !== undefined) {
      hasAnyValues = true;
      internalValueResult.xforwardedforclientcertfingerprintalias = this._xforwardedforclientcertfingerprintalias;
    }
    if (this._xforwardedforclientcertfingerprintenabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xforwardedforclientcertfingerprintenabled = this._xforwardedforclientcertfingerprintenabled;
    }
    if (this._xforwardedforclientcertsubjectdnalias !== undefined) {
      hasAnyValues = true;
      internalValueResult.xforwardedforclientcertsubjectdnalias = this._xforwardedforclientcertsubjectdnalias;
    }
    if (this._xforwardedforclientcertsubjectdnenabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xforwardedforclientcertsubjectdnenabled = this._xforwardedforclientcertsubjectdnenabled;
    }
    if (this._xforwardedforclientsrcportenabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xforwardedforclientsrcportenabled = this._xforwardedforclientsrcportenabled;
    }
    if (this._xforwardedforenabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xforwardedforenabled = this._xforwardedforenabled;
    }
    if (this._xforwardedforprotoenabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xforwardedforprotoenabled = this._xforwardedforprotoenabled;
    }
    if (this._xforwardedforslbidenabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xforwardedforslbidenabled = this._xforwardedforslbidenabled;
    }
    if (this._xforwardedforslbportenabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xforwardedforslbportenabled = this._xforwardedforslbportenabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerXforwardedForConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xforwardedforclientcertIssuerdnalias = undefined;
      this._xforwardedforclientcertIssuerdnenabled = undefined;
      this._xforwardedforclientcertclientverifyalias = undefined;
      this._xforwardedforclientcertclientverifyenabled = undefined;
      this._xforwardedforclientcertfingerprintalias = undefined;
      this._xforwardedforclientcertfingerprintenabled = undefined;
      this._xforwardedforclientcertsubjectdnalias = undefined;
      this._xforwardedforclientcertsubjectdnenabled = undefined;
      this._xforwardedforclientsrcportenabled = undefined;
      this._xforwardedforenabled = undefined;
      this._xforwardedforprotoenabled = undefined;
      this._xforwardedforslbidenabled = undefined;
      this._xforwardedforslbportenabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xforwardedforclientcertIssuerdnalias = value.xforwardedforclientcertIssuerdnalias;
      this._xforwardedforclientcertIssuerdnenabled = value.xforwardedforclientcertIssuerdnenabled;
      this._xforwardedforclientcertclientverifyalias = value.xforwardedforclientcertclientverifyalias;
      this._xforwardedforclientcertclientverifyenabled = value.xforwardedforclientcertclientverifyenabled;
      this._xforwardedforclientcertfingerprintalias = value.xforwardedforclientcertfingerprintalias;
      this._xforwardedforclientcertfingerprintenabled = value.xforwardedforclientcertfingerprintenabled;
      this._xforwardedforclientcertsubjectdnalias = value.xforwardedforclientcertsubjectdnalias;
      this._xforwardedforclientcertsubjectdnenabled = value.xforwardedforclientcertsubjectdnenabled;
      this._xforwardedforclientsrcportenabled = value.xforwardedforclientsrcportenabled;
      this._xforwardedforenabled = value.xforwardedforenabled;
      this._xforwardedforprotoenabled = value.xforwardedforprotoenabled;
      this._xforwardedforslbidenabled = value.xforwardedforslbidenabled;
      this._xforwardedforslbportenabled = value.xforwardedforslbportenabled;
    }
  }

  // xforwardedforclientcert_issuerdnalias - computed: false, optional: true, required: false
  private _xforwardedforclientcertIssuerdnalias?: string; 
  public get xforwardedforclientcertIssuerdnalias() {
    return this.getStringAttribute('xforwardedforclientcert_issuerdnalias');
  }
  public set xforwardedforclientcertIssuerdnalias(value: string) {
    this._xforwardedforclientcertIssuerdnalias = value;
  }
  public resetXforwardedforclientcertIssuerdnalias() {
    this._xforwardedforclientcertIssuerdnalias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedforclientcertIssuerdnaliasInput() {
    return this._xforwardedforclientcertIssuerdnalias;
  }

  // xforwardedforclientcert_issuerdnenabled - computed: true, optional: true, required: false
  private _xforwardedforclientcertIssuerdnenabled?: boolean | cdktf.IResolvable; 
  public get xforwardedforclientcertIssuerdnenabled() {
    return this.getBooleanAttribute('xforwardedforclientcert_issuerdnenabled');
  }
  public set xforwardedforclientcertIssuerdnenabled(value: boolean | cdktf.IResolvable) {
    this._xforwardedforclientcertIssuerdnenabled = value;
  }
  public resetXforwardedforclientcertIssuerdnenabled() {
    this._xforwardedforclientcertIssuerdnenabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedforclientcertIssuerdnenabledInput() {
    return this._xforwardedforclientcertIssuerdnenabled;
  }

  // xforwardedforclientcertclientverifyalias - computed: false, optional: true, required: false
  private _xforwardedforclientcertclientverifyalias?: string; 
  public get xforwardedforclientcertclientverifyalias() {
    return this.getStringAttribute('xforwardedforclientcertclientverifyalias');
  }
  public set xforwardedforclientcertclientverifyalias(value: string) {
    this._xforwardedforclientcertclientverifyalias = value;
  }
  public resetXforwardedforclientcertclientverifyalias() {
    this._xforwardedforclientcertclientverifyalias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedforclientcertclientverifyaliasInput() {
    return this._xforwardedforclientcertclientverifyalias;
  }

  // xforwardedforclientcertclientverifyenabled - computed: true, optional: true, required: false
  private _xforwardedforclientcertclientverifyenabled?: boolean | cdktf.IResolvable; 
  public get xforwardedforclientcertclientverifyenabled() {
    return this.getBooleanAttribute('xforwardedforclientcertclientverifyenabled');
  }
  public set xforwardedforclientcertclientverifyenabled(value: boolean | cdktf.IResolvable) {
    this._xforwardedforclientcertclientverifyenabled = value;
  }
  public resetXforwardedforclientcertclientverifyenabled() {
    this._xforwardedforclientcertclientverifyenabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedforclientcertclientverifyenabledInput() {
    return this._xforwardedforclientcertclientverifyenabled;
  }

  // xforwardedforclientcertfingerprintalias - computed: false, optional: true, required: false
  private _xforwardedforclientcertfingerprintalias?: string; 
  public get xforwardedforclientcertfingerprintalias() {
    return this.getStringAttribute('xforwardedforclientcertfingerprintalias');
  }
  public set xforwardedforclientcertfingerprintalias(value: string) {
    this._xforwardedforclientcertfingerprintalias = value;
  }
  public resetXforwardedforclientcertfingerprintalias() {
    this._xforwardedforclientcertfingerprintalias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedforclientcertfingerprintaliasInput() {
    return this._xforwardedforclientcertfingerprintalias;
  }

  // xforwardedforclientcertfingerprintenabled - computed: true, optional: true, required: false
  private _xforwardedforclientcertfingerprintenabled?: boolean | cdktf.IResolvable; 
  public get xforwardedforclientcertfingerprintenabled() {
    return this.getBooleanAttribute('xforwardedforclientcertfingerprintenabled');
  }
  public set xforwardedforclientcertfingerprintenabled(value: boolean | cdktf.IResolvable) {
    this._xforwardedforclientcertfingerprintenabled = value;
  }
  public resetXforwardedforclientcertfingerprintenabled() {
    this._xforwardedforclientcertfingerprintenabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedforclientcertfingerprintenabledInput() {
    return this._xforwardedforclientcertfingerprintenabled;
  }

  // xforwardedforclientcertsubjectdnalias - computed: false, optional: true, required: false
  private _xforwardedforclientcertsubjectdnalias?: string; 
  public get xforwardedforclientcertsubjectdnalias() {
    return this.getStringAttribute('xforwardedforclientcertsubjectdnalias');
  }
  public set xforwardedforclientcertsubjectdnalias(value: string) {
    this._xforwardedforclientcertsubjectdnalias = value;
  }
  public resetXforwardedforclientcertsubjectdnalias() {
    this._xforwardedforclientcertsubjectdnalias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedforclientcertsubjectdnaliasInput() {
    return this._xforwardedforclientcertsubjectdnalias;
  }

  // xforwardedforclientcertsubjectdnenabled - computed: true, optional: true, required: false
  private _xforwardedforclientcertsubjectdnenabled?: boolean | cdktf.IResolvable; 
  public get xforwardedforclientcertsubjectdnenabled() {
    return this.getBooleanAttribute('xforwardedforclientcertsubjectdnenabled');
  }
  public set xforwardedforclientcertsubjectdnenabled(value: boolean | cdktf.IResolvable) {
    this._xforwardedforclientcertsubjectdnenabled = value;
  }
  public resetXforwardedforclientcertsubjectdnenabled() {
    this._xforwardedforclientcertsubjectdnenabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedforclientcertsubjectdnenabledInput() {
    return this._xforwardedforclientcertsubjectdnenabled;
  }

  // xforwardedforclientsrcportenabled - computed: true, optional: true, required: false
  private _xforwardedforclientsrcportenabled?: boolean | cdktf.IResolvable; 
  public get xforwardedforclientsrcportenabled() {
    return this.getBooleanAttribute('xforwardedforclientsrcportenabled');
  }
  public set xforwardedforclientsrcportenabled(value: boolean | cdktf.IResolvable) {
    this._xforwardedforclientsrcportenabled = value;
  }
  public resetXforwardedforclientsrcportenabled() {
    this._xforwardedforclientsrcportenabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedforclientsrcportenabledInput() {
    return this._xforwardedforclientsrcportenabled;
  }

  // xforwardedforenabled - computed: true, optional: true, required: false
  private _xforwardedforenabled?: boolean | cdktf.IResolvable; 
  public get xforwardedforenabled() {
    return this.getBooleanAttribute('xforwardedforenabled');
  }
  public set xforwardedforenabled(value: boolean | cdktf.IResolvable) {
    this._xforwardedforenabled = value;
  }
  public resetXforwardedforenabled() {
    this._xforwardedforenabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedforenabledInput() {
    return this._xforwardedforenabled;
  }

  // xforwardedforprotoenabled - computed: true, optional: true, required: false
  private _xforwardedforprotoenabled?: boolean | cdktf.IResolvable; 
  public get xforwardedforprotoenabled() {
    return this.getBooleanAttribute('xforwardedforprotoenabled');
  }
  public set xforwardedforprotoenabled(value: boolean | cdktf.IResolvable) {
    this._xforwardedforprotoenabled = value;
  }
  public resetXforwardedforprotoenabled() {
    this._xforwardedforprotoenabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedforprotoenabledInput() {
    return this._xforwardedforprotoenabled;
  }

  // xforwardedforslbidenabled - computed: true, optional: true, required: false
  private _xforwardedforslbidenabled?: boolean | cdktf.IResolvable; 
  public get xforwardedforslbidenabled() {
    return this.getBooleanAttribute('xforwardedforslbidenabled');
  }
  public set xforwardedforslbidenabled(value: boolean | cdktf.IResolvable) {
    this._xforwardedforslbidenabled = value;
  }
  public resetXforwardedforslbidenabled() {
    this._xforwardedforslbidenabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedforslbidenabledInput() {
    return this._xforwardedforslbidenabled;
  }

  // xforwardedforslbportenabled - computed: true, optional: true, required: false
  private _xforwardedforslbportenabled?: boolean | cdktf.IResolvable; 
  public get xforwardedforslbportenabled() {
    return this.getBooleanAttribute('xforwardedforslbportenabled');
  }
  public set xforwardedforslbportenabled(value: boolean | cdktf.IResolvable) {
    this._xforwardedforslbportenabled = value;
  }
  public resetXforwardedforslbportenabled() {
    this._xforwardedforslbportenabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedforslbportenabledInput() {
    return this._xforwardedforslbportenabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener alicloud_alb_listener}
*/
export class AlbListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alb_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlbListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlbListener to import
  * @param importFromId The id of the existing AlbListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlbListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alb_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alb_listener alicloud_alb_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbListenerConfig
  */
  public constructor(scope: Construct, id: string, config: AlbListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alb_listener',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLogRecordCustomizedHeadersEnabled = config.accessLogRecordCustomizedHeadersEnabled;
    this._caEnabled = config.caEnabled;
    this._dryRun = config.dryRun;
    this._gzipEnabled = config.gzipEnabled;
    this._http2Enabled = config.http2Enabled;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._listenerDescription = config.listenerDescription;
    this._listenerPort = config.listenerPort;
    this._listenerProtocol = config.listenerProtocol;
    this._loadBalancerId = config.loadBalancerId;
    this._requestTimeout = config.requestTimeout;
    this._securityPolicyId = config.securityPolicyId;
    this._status = config.status;
    this._tags = config.tags;
    this._accessLogTracingConfig.internalValue = config.accessLogTracingConfig;
    this._aclConfig.internalValue = config.aclConfig;
    this._caCertificates.internalValue = config.caCertificates;
    this._certificates.internalValue = config.certificates;
    this._defaultActions.internalValue = config.defaultActions;
    this._quicConfig.internalValue = config.quicConfig;
    this._timeouts.internalValue = config.timeouts;
    this._xForwardedForConfig.internalValue = config.xForwardedForConfig;
    this._xforwardedForConfig.internalValue = config.xforwardedForConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_log_record_customized_headers_enabled - computed: false, optional: true, required: false
  private _accessLogRecordCustomizedHeadersEnabled?: boolean | cdktf.IResolvable; 
  public get accessLogRecordCustomizedHeadersEnabled() {
    return this.getBooleanAttribute('access_log_record_customized_headers_enabled');
  }
  public set accessLogRecordCustomizedHeadersEnabled(value: boolean | cdktf.IResolvable) {
    this._accessLogRecordCustomizedHeadersEnabled = value;
  }
  public resetAccessLogRecordCustomizedHeadersEnabled() {
    this._accessLogRecordCustomizedHeadersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogRecordCustomizedHeadersEnabledInput() {
    return this._accessLogRecordCustomizedHeadersEnabled;
  }

  // ca_enabled - computed: false, optional: true, required: false
  private _caEnabled?: boolean | cdktf.IResolvable; 
  public get caEnabled() {
    return this.getBooleanAttribute('ca_enabled');
  }
  public set caEnabled(value: boolean | cdktf.IResolvable) {
    this._caEnabled = value;
  }
  public resetCaEnabled() {
    this._caEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caEnabledInput() {
    return this._caEnabled;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // gzip_enabled - computed: true, optional: true, required: false
  private _gzipEnabled?: boolean | cdktf.IResolvable; 
  public get gzipEnabled() {
    return this.getBooleanAttribute('gzip_enabled');
  }
  public set gzipEnabled(value: boolean | cdktf.IResolvable) {
    this._gzipEnabled = value;
  }
  public resetGzipEnabled() {
    this._gzipEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipEnabledInput() {
    return this._gzipEnabled;
  }

  // http2_enabled - computed: true, optional: true, required: false
  private _http2Enabled?: boolean | cdktf.IResolvable; 
  public get http2Enabled() {
    return this.getBooleanAttribute('http2_enabled');
  }
  public set http2Enabled(value: boolean | cdktf.IResolvable) {
    this._http2Enabled = value;
  }
  public resetHttp2Enabled() {
    this._http2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2EnabledInput() {
    return this._http2Enabled;
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

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // listener_description - computed: false, optional: true, required: false
  private _listenerDescription?: string; 
  public get listenerDescription() {
    return this.getStringAttribute('listener_description');
  }
  public set listenerDescription(value: string) {
    this._listenerDescription = value;
  }
  public resetListenerDescription() {
    this._listenerDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerDescriptionInput() {
    return this._listenerDescription;
  }

  // listener_port - computed: false, optional: false, required: true
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }

  // listener_protocol - computed: false, optional: false, required: true
  private _listenerProtocol?: string; 
  public get listenerProtocol() {
    return this.getStringAttribute('listener_protocol');
  }
  public set listenerProtocol(value: string) {
    this._listenerProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerProtocolInput() {
    return this._listenerProtocol;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // request_timeout - computed: true, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // security_policy_id - computed: true, optional: true, required: false
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  public resetSecurityPolicyId() {
    this._securityPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // access_log_tracing_config - computed: false, optional: true, required: false
  private _accessLogTracingConfig = new AlbListenerAccessLogTracingConfigOutputReference(this, "access_log_tracing_config");
  public get accessLogTracingConfig() {
    return this._accessLogTracingConfig;
  }
  public putAccessLogTracingConfig(value: AlbListenerAccessLogTracingConfig) {
    this._accessLogTracingConfig.internalValue = value;
  }
  public resetAccessLogTracingConfig() {
    this._accessLogTracingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogTracingConfigInput() {
    return this._accessLogTracingConfig.internalValue;
  }

  // acl_config - computed: false, optional: true, required: false
  private _aclConfig = new AlbListenerAclConfigOutputReference(this, "acl_config");
  public get aclConfig() {
    return this._aclConfig;
  }
  public putAclConfig(value: AlbListenerAclConfig) {
    this._aclConfig.internalValue = value;
  }
  public resetAclConfig() {
    this._aclConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclConfigInput() {
    return this._aclConfig.internalValue;
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates = new AlbListenerCaCertificatesList(this, "ca_certificates", false);
  public get caCertificates() {
    return this._caCertificates;
  }
  public putCaCertificates(value: AlbListenerCaCertificates[] | cdktf.IResolvable) {
    this._caCertificates.internalValue = value;
  }
  public resetCaCertificates() {
    this._caCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates.internalValue;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates = new AlbListenerCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: AlbListenerCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // default_actions - computed: false, optional: false, required: true
  private _defaultActions = new AlbListenerDefaultActionsList(this, "default_actions", false);
  public get defaultActions() {
    return this._defaultActions;
  }
  public putDefaultActions(value: AlbListenerDefaultActions[] | cdktf.IResolvable) {
    this._defaultActions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionsInput() {
    return this._defaultActions.internalValue;
  }

  // quic_config - computed: false, optional: true, required: false
  private _quicConfig = new AlbListenerQuicConfigOutputReference(this, "quic_config");
  public get quicConfig() {
    return this._quicConfig;
  }
  public putQuicConfig(value: AlbListenerQuicConfig) {
    this._quicConfig.internalValue = value;
  }
  public resetQuicConfig() {
    this._quicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicConfigInput() {
    return this._quicConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlbListenerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlbListenerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // x_forwarded_for_config - computed: false, optional: true, required: false
  private _xForwardedForConfig = new AlbListenerXForwardedForConfigOutputReference(this, "x_forwarded_for_config");
  public get xForwardedForConfig() {
    return this._xForwardedForConfig;
  }
  public putXForwardedForConfig(value: AlbListenerXForwardedForConfig) {
    this._xForwardedForConfig.internalValue = value;
  }
  public resetXForwardedForConfig() {
    this._xForwardedForConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForConfigInput() {
    return this._xForwardedForConfig.internalValue;
  }

  // xforwarded_for_config - computed: false, optional: true, required: false
  private _xforwardedForConfig = new AlbListenerXforwardedForConfigOutputReference(this, "xforwarded_for_config");
  public get xforwardedForConfig() {
    return this._xforwardedForConfig;
  }
  public putXforwardedForConfig(value: AlbListenerXforwardedForConfig) {
    this._xforwardedForConfig.internalValue = value;
  }
  public resetXforwardedForConfig() {
    this._xforwardedForConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xforwardedForConfigInput() {
    return this._xforwardedForConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_log_record_customized_headers_enabled: cdktf.booleanToTerraform(this._accessLogRecordCustomizedHeadersEnabled),
      ca_enabled: cdktf.booleanToTerraform(this._caEnabled),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      gzip_enabled: cdktf.booleanToTerraform(this._gzipEnabled),
      http2_enabled: cdktf.booleanToTerraform(this._http2Enabled),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      listener_description: cdktf.stringToTerraform(this._listenerDescription),
      listener_port: cdktf.numberToTerraform(this._listenerPort),
      listener_protocol: cdktf.stringToTerraform(this._listenerProtocol),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      access_log_tracing_config: albListenerAccessLogTracingConfigToTerraform(this._accessLogTracingConfig.internalValue),
      acl_config: albListenerAclConfigToTerraform(this._aclConfig.internalValue),
      ca_certificates: cdktf.listMapper(albListenerCaCertificatesToTerraform, true)(this._caCertificates.internalValue),
      certificates: cdktf.listMapper(albListenerCertificatesToTerraform, true)(this._certificates.internalValue),
      default_actions: cdktf.listMapper(albListenerDefaultActionsToTerraform, true)(this._defaultActions.internalValue),
      quic_config: albListenerQuicConfigToTerraform(this._quicConfig.internalValue),
      timeouts: albListenerTimeoutsToTerraform(this._timeouts.internalValue),
      x_forwarded_for_config: albListenerXForwardedForConfigToTerraform(this._xForwardedForConfig.internalValue),
      xforwarded_for_config: albListenerXforwardedForConfigToTerraform(this._xforwardedForConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_log_record_customized_headers_enabled: {
        value: cdktf.booleanToHclTerraform(this._accessLogRecordCustomizedHeadersEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ca_enabled: {
        value: cdktf.booleanToHclTerraform(this._caEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gzip_enabled: {
        value: cdktf.booleanToHclTerraform(this._gzipEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http2_enabled: {
        value: cdktf.booleanToHclTerraform(this._http2Enabled),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listener_description: {
        value: cdktf.stringToHclTerraform(this._listenerDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_port: {
        value: cdktf.numberToHclTerraform(this._listenerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listener_protocol: {
        value: cdktf.stringToHclTerraform(this._listenerProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      access_log_tracing_config: {
        value: albListenerAccessLogTracingConfigToHclTerraform(this._accessLogTracingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbListenerAccessLogTracingConfigList",
      },
      acl_config: {
        value: albListenerAclConfigToHclTerraform(this._aclConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbListenerAclConfigList",
      },
      ca_certificates: {
        value: cdktf.listMapperHcl(albListenerCaCertificatesToHclTerraform, true)(this._caCertificates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbListenerCaCertificatesList",
      },
      certificates: {
        value: cdktf.listMapperHcl(albListenerCertificatesToHclTerraform, true)(this._certificates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbListenerCertificatesList",
      },
      default_actions: {
        value: cdktf.listMapperHcl(albListenerDefaultActionsToHclTerraform, true)(this._defaultActions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbListenerDefaultActionsList",
      },
      quic_config: {
        value: albListenerQuicConfigToHclTerraform(this._quicConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbListenerQuicConfigList",
      },
      timeouts: {
        value: albListenerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlbListenerTimeouts",
      },
      x_forwarded_for_config: {
        value: albListenerXForwardedForConfigToHclTerraform(this._xForwardedForConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbListenerXForwardedForConfigList",
      },
      xforwarded_for_config: {
        value: albListenerXforwardedForConfigToHclTerraform(this._xforwardedForConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbListenerXforwardedForConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
