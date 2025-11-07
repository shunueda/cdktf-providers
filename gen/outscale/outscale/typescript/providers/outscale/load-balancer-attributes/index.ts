// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#id LoadBalancerAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#load_balancer_name LoadBalancerAttributes#load_balancer_name}
  */
  readonly loadBalancerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#load_balancer_port LoadBalancerAttributes#load_balancer_port}
  */
  readonly loadBalancerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#policy_names LoadBalancerAttributes#policy_names}
  */
  readonly policyNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#server_certificate_id LoadBalancerAttributes#server_certificate_id}
  */
  readonly serverCertificateId?: string;
  /**
  * access_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#access_log LoadBalancerAttributes#access_log}
  */
  readonly accessLog?: LoadBalancerAttributesAccessLog;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#health_check LoadBalancerAttributes#health_check}
  */
  readonly healthCheck?: LoadBalancerAttributesHealthCheck;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#tags LoadBalancerAttributes#tags}
  */
  readonly tags?: LoadBalancerAttributesTags[] | cdktf.IResolvable;
}
export interface LoadBalancerAttributesApplicationStickyCookiePolicies {
}

export function loadBalancerAttributesApplicationStickyCookiePoliciesToTerraform(struct?: LoadBalancerAttributesApplicationStickyCookiePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function loadBalancerAttributesApplicationStickyCookiePoliciesToHclTerraform(struct?: LoadBalancerAttributesApplicationStickyCookiePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LoadBalancerAttributesApplicationStickyCookiePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerAttributesApplicationStickyCookiePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerAttributesApplicationStickyCookiePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie_name - computed: true, optional: false, required: false
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
}

export class LoadBalancerAttributesApplicationStickyCookiePoliciesList extends cdktf.ComplexList {

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
  public get(index: number): LoadBalancerAttributesApplicationStickyCookiePoliciesOutputReference {
    return new LoadBalancerAttributesApplicationStickyCookiePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerAttributesListeners {
}

export function loadBalancerAttributesListenersToTerraform(struct?: LoadBalancerAttributesListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function loadBalancerAttributesListenersToHclTerraform(struct?: LoadBalancerAttributesListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LoadBalancerAttributesListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerAttributesListeners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerAttributesListeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_port - computed: true, optional: false, required: false
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }

  // backend_protocol - computed: true, optional: false, required: false
  public get backendProtocol() {
    return this.getStringAttribute('backend_protocol');
  }

  // load_balancer_port - computed: true, optional: false, required: false
  public get loadBalancerPort() {
    return this.getNumberAttribute('load_balancer_port');
  }

  // load_balancer_protocol - computed: true, optional: false, required: false
  public get loadBalancerProtocol() {
    return this.getStringAttribute('load_balancer_protocol');
  }

  // policy_names - computed: true, optional: false, required: false
  public get policyNames() {
    return this.getListAttribute('policy_names');
  }

  // server_certificate_id - computed: true, optional: false, required: false
  public get serverCertificateId() {
    return this.getStringAttribute('server_certificate_id');
  }
}

export class LoadBalancerAttributesListenersList extends cdktf.ComplexList {

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
  public get(index: number): LoadBalancerAttributesListenersOutputReference {
    return new LoadBalancerAttributesListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerAttributesLoadBalancerStickyCookiePolicies {
}

export function loadBalancerAttributesLoadBalancerStickyCookiePoliciesToTerraform(struct?: LoadBalancerAttributesLoadBalancerStickyCookiePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function loadBalancerAttributesLoadBalancerStickyCookiePoliciesToHclTerraform(struct?: LoadBalancerAttributesLoadBalancerStickyCookiePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LoadBalancerAttributesLoadBalancerStickyCookiePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerAttributesLoadBalancerStickyCookiePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerAttributesLoadBalancerStickyCookiePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
}

export class LoadBalancerAttributesLoadBalancerStickyCookiePoliciesList extends cdktf.ComplexList {

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
  public get(index: number): LoadBalancerAttributesLoadBalancerStickyCookiePoliciesOutputReference {
    return new LoadBalancerAttributesLoadBalancerStickyCookiePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerAttributesSourceSecurityGroup {
}

export function loadBalancerAttributesSourceSecurityGroupToTerraform(struct?: LoadBalancerAttributesSourceSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function loadBalancerAttributesSourceSecurityGroupToHclTerraform(struct?: LoadBalancerAttributesSourceSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LoadBalancerAttributesSourceSecurityGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerAttributesSourceSecurityGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerAttributesSourceSecurityGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_account_id - computed: true, optional: false, required: false
  public get securityGroupAccountId() {
    return this.getStringAttribute('security_group_account_id');
  }

  // security_group_name - computed: true, optional: false, required: false
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
}

export class LoadBalancerAttributesSourceSecurityGroupList extends cdktf.ComplexList {

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
  public get(index: number): LoadBalancerAttributesSourceSecurityGroupOutputReference {
    return new LoadBalancerAttributesSourceSecurityGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerAttributesAccessLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#is_enabled LoadBalancerAttributes#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#osu_bucket_name LoadBalancerAttributes#osu_bucket_name}
  */
  readonly osuBucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#osu_bucket_prefix LoadBalancerAttributes#osu_bucket_prefix}
  */
  readonly osuBucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#publication_interval LoadBalancerAttributes#publication_interval}
  */
  readonly publicationInterval?: number;
}

export function loadBalancerAttributesAccessLogToTerraform(struct?: LoadBalancerAttributesAccessLogOutputReference | LoadBalancerAttributesAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    osu_bucket_name: cdktf.stringToTerraform(struct!.osuBucketName),
    osu_bucket_prefix: cdktf.stringToTerraform(struct!.osuBucketPrefix),
    publication_interval: cdktf.numberToTerraform(struct!.publicationInterval),
  }
}


export function loadBalancerAttributesAccessLogToHclTerraform(struct?: LoadBalancerAttributesAccessLogOutputReference | LoadBalancerAttributesAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    osu_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.osuBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    osu_bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.osuBucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publication_interval: {
      value: cdktf.numberToHclTerraform(struct!.publicationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerAttributesAccessLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerAttributesAccessLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._osuBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osuBucketName = this._osuBucketName;
    }
    if (this._osuBucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.osuBucketPrefix = this._osuBucketPrefix;
    }
    if (this._publicationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicationInterval = this._publicationInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerAttributesAccessLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._osuBucketName = undefined;
      this._osuBucketPrefix = undefined;
      this._publicationInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._osuBucketName = value.osuBucketName;
      this._osuBucketPrefix = value.osuBucketPrefix;
      this._publicationInterval = value.publicationInterval;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // osu_bucket_name - computed: false, optional: true, required: false
  private _osuBucketName?: string; 
  public get osuBucketName() {
    return this.getStringAttribute('osu_bucket_name');
  }
  public set osuBucketName(value: string) {
    this._osuBucketName = value;
  }
  public resetOsuBucketName() {
    this._osuBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osuBucketNameInput() {
    return this._osuBucketName;
  }

  // osu_bucket_prefix - computed: false, optional: true, required: false
  private _osuBucketPrefix?: string; 
  public get osuBucketPrefix() {
    return this.getStringAttribute('osu_bucket_prefix');
  }
  public set osuBucketPrefix(value: string) {
    this._osuBucketPrefix = value;
  }
  public resetOsuBucketPrefix() {
    this._osuBucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osuBucketPrefixInput() {
    return this._osuBucketPrefix;
  }

  // publication_interval - computed: false, optional: true, required: false
  private _publicationInterval?: number; 
  public get publicationInterval() {
    return this.getNumberAttribute('publication_interval');
  }
  public set publicationInterval(value: number) {
    this._publicationInterval = value;
  }
  public resetPublicationInterval() {
    this._publicationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicationIntervalInput() {
    return this._publicationInterval;
  }
}
export interface LoadBalancerAttributesHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#check_interval LoadBalancerAttributes#check_interval}
  */
  readonly checkInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#healthy_threshold LoadBalancerAttributes#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#path LoadBalancerAttributes#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#port LoadBalancerAttributes#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#protocol LoadBalancerAttributes#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#timeout LoadBalancerAttributes#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#unhealthy_threshold LoadBalancerAttributes#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function loadBalancerAttributesHealthCheckToTerraform(struct?: LoadBalancerAttributesHealthCheckOutputReference | LoadBalancerAttributesHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_interval: cdktf.numberToTerraform(struct!.checkInterval),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function loadBalancerAttributesHealthCheckToHclTerraform(struct?: LoadBalancerAttributesHealthCheckOutputReference | LoadBalancerAttributesHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_interval: {
      value: cdktf.numberToHclTerraform(struct!.checkInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerAttributesHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerAttributesHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkInterval = this._checkInterval;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerAttributesHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkInterval = undefined;
      this._healthyThreshold = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkInterval = value.checkInterval;
      this._healthyThreshold = value.healthyThreshold;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // check_interval - computed: true, optional: true, required: false
  private _checkInterval?: number; 
  public get checkInterval() {
    return this.getNumberAttribute('check_interval');
  }
  public set checkInterval(value: number) {
    this._checkInterval = value;
  }
  public resetCheckInterval() {
    this._checkInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalInput() {
    return this._checkInterval;
  }

  // healthy_threshold - computed: true, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: true, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}
export interface LoadBalancerAttributesTags {
}

export function loadBalancerAttributesTagsToTerraform(struct?: LoadBalancerAttributesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function loadBalancerAttributesTagsToHclTerraform(struct?: LoadBalancerAttributesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LoadBalancerAttributesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerAttributesTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerAttributesTags | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LoadBalancerAttributesTagsList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerAttributesTags[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerAttributesTagsOutputReference {
    return new LoadBalancerAttributesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes outscale_load_balancer_attributes}
*/
export class LoadBalancerAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_load_balancer_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancerAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancerAttributes to import
  * @param importFromId The id of the existing LoadBalancerAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancerAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_load_balancer_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/load_balancer_attributes outscale_load_balancer_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_load_balancer_attributes',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._loadBalancerName = config.loadBalancerName;
    this._loadBalancerPort = config.loadBalancerPort;
    this._policyNames = config.policyNames;
    this._serverCertificateId = config.serverCertificateId;
    this._accessLog.internalValue = config.accessLog;
    this._healthCheck.internalValue = config.healthCheck;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_sticky_cookie_policies - computed: true, optional: false, required: false
  private _applicationStickyCookiePolicies = new LoadBalancerAttributesApplicationStickyCookiePoliciesList(this, "application_sticky_cookie_policies", false);
  public get applicationStickyCookiePolicies() {
    return this._applicationStickyCookiePolicies;
  }

  // backend_vm_ids - computed: true, optional: false, required: false
  public get backendVmIds() {
    return this.getListAttribute('backend_vm_ids');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
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

  // listeners - computed: true, optional: false, required: false
  private _listeners = new LoadBalancerAttributesListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }

  // load_balancer_name - computed: false, optional: false, required: true
  private _loadBalancerName?: string; 
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName;
  }

  // load_balancer_port - computed: false, optional: true, required: false
  private _loadBalancerPort?: number; 
  public get loadBalancerPort() {
    return this.getNumberAttribute('load_balancer_port');
  }
  public set loadBalancerPort(value: number) {
    this._loadBalancerPort = value;
  }
  public resetLoadBalancerPort() {
    this._loadBalancerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerPortInput() {
    return this._loadBalancerPort;
  }

  // load_balancer_sticky_cookie_policies - computed: true, optional: false, required: false
  private _loadBalancerStickyCookiePolicies = new LoadBalancerAttributesLoadBalancerStickyCookiePoliciesList(this, "load_balancer_sticky_cookie_policies", false);
  public get loadBalancerStickyCookiePolicies() {
    return this._loadBalancerStickyCookiePolicies;
  }

  // load_balancer_type - computed: true, optional: false, required: false
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }

  // policy_names - computed: false, optional: true, required: false
  private _policyNames?: string[]; 
  public get policyNames() {
    return this.getListAttribute('policy_names');
  }
  public set policyNames(value: string[]) {
    this._policyNames = value;
  }
  public resetPolicyNames() {
    this._policyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNamesInput() {
    return this._policyNames;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // server_certificate_id - computed: false, optional: true, required: false
  private _serverCertificateId?: string; 
  public get serverCertificateId() {
    return this.getStringAttribute('server_certificate_id');
  }
  public set serverCertificateId(value: string) {
    this._serverCertificateId = value;
  }
  public resetServerCertificateId() {
    this._serverCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateIdInput() {
    return this._serverCertificateId;
  }

  // source_security_group - computed: true, optional: false, required: false
  private _sourceSecurityGroup = new LoadBalancerAttributesSourceSecurityGroupList(this, "source_security_group", false);
  public get sourceSecurityGroup() {
    return this._sourceSecurityGroup;
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // subregion_names - computed: true, optional: false, required: false
  public get subregionNames() {
    return this.getListAttribute('subregion_names');
  }

  // access_log - computed: false, optional: true, required: false
  private _accessLog = new LoadBalancerAttributesAccessLogOutputReference(this, "access_log");
  public get accessLog() {
    return this._accessLog;
  }
  public putAccessLog(value: LoadBalancerAttributesAccessLog) {
    this._accessLog.internalValue = value;
  }
  public resetAccessLog() {
    this._accessLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new LoadBalancerAttributesHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: LoadBalancerAttributesHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new LoadBalancerAttributesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: LoadBalancerAttributesTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
      load_balancer_port: cdktf.numberToTerraform(this._loadBalancerPort),
      policy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyNames),
      server_certificate_id: cdktf.stringToTerraform(this._serverCertificateId),
      access_log: loadBalancerAttributesAccessLogToTerraform(this._accessLog.internalValue),
      health_check: loadBalancerAttributesHealthCheckToTerraform(this._healthCheck.internalValue),
      tags: cdktf.listMapper(loadBalancerAttributesTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_name: {
        value: cdktf.stringToHclTerraform(this._loadBalancerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_port: {
        value: cdktf.numberToHclTerraform(this._loadBalancerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      server_certificate_id: {
        value: cdktf.stringToHclTerraform(this._serverCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_log: {
        value: loadBalancerAttributesAccessLogToHclTerraform(this._accessLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerAttributesAccessLogList",
      },
      health_check: {
        value: loadBalancerAttributesHealthCheckToHclTerraform(this._healthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerAttributesHealthCheckList",
      },
      tags: {
        value: cdktf.listMapperHcl(loadBalancerAttributesTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerAttributesTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
