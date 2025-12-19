// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#address_allocated_mode AlbLoadBalancer#address_allocated_mode}
  */
  readonly addressAllocatedMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#address_ip_version AlbLoadBalancer#address_ip_version}
  */
  readonly addressIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#address_type AlbLoadBalancer#address_type}
  */
  readonly addressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#bandwidth_package_id AlbLoadBalancer#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#deletion_protection_enabled AlbLoadBalancer#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#dry_run AlbLoadBalancer#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#id AlbLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#ipv6_address_type AlbLoadBalancer#ipv6_address_type}
  */
  readonly ipv6AddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#load_balancer_edition AlbLoadBalancer#load_balancer_edition}
  */
  readonly loadBalancerEdition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#load_balancer_name AlbLoadBalancer#load_balancer_name}
  */
  readonly loadBalancerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#resource_group_id AlbLoadBalancer#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#tags AlbLoadBalancer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#vpc_id AlbLoadBalancer#vpc_id}
  */
  readonly vpcId: string;
  /**
  * access_log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#access_log_config AlbLoadBalancer#access_log_config}
  */
  readonly accessLogConfig?: AlbLoadBalancerAccessLogConfig;
  /**
  * deletion_protection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#deletion_protection_config AlbLoadBalancer#deletion_protection_config}
  */
  readonly deletionProtectionConfig?: AlbLoadBalancerDeletionProtectionConfig;
  /**
  * load_balancer_billing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#load_balancer_billing_config AlbLoadBalancer#load_balancer_billing_config}
  */
  readonly loadBalancerBillingConfig: AlbLoadBalancerLoadBalancerBillingConfig;
  /**
  * modification_protection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#modification_protection_config AlbLoadBalancer#modification_protection_config}
  */
  readonly modificationProtectionConfig?: AlbLoadBalancerModificationProtectionConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#timeouts AlbLoadBalancer#timeouts}
  */
  readonly timeouts?: AlbLoadBalancerTimeouts;
  /**
  * zone_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#zone_mappings AlbLoadBalancer#zone_mappings}
  */
  readonly zoneMappings: AlbLoadBalancerZoneMappings[] | cdktf.IResolvable;
}
export interface AlbLoadBalancerAccessLogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#log_project AlbLoadBalancer#log_project}
  */
  readonly logProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#log_store AlbLoadBalancer#log_store}
  */
  readonly logStore?: string;
}

export function albLoadBalancerAccessLogConfigToTerraform(struct?: AlbLoadBalancerAccessLogConfigOutputReference | AlbLoadBalancerAccessLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_project: cdktf.stringToTerraform(struct!.logProject),
    log_store: cdktf.stringToTerraform(struct!.logStore),
  }
}


export function albLoadBalancerAccessLogConfigToHclTerraform(struct?: AlbLoadBalancerAccessLogConfigOutputReference | AlbLoadBalancerAccessLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_project: {
      value: cdktf.stringToHclTerraform(struct!.logProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_store: {
      value: cdktf.stringToHclTerraform(struct!.logStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerAccessLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerAccessLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.logProject = this._logProject;
    }
    if (this._logStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStore = this._logStore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerAccessLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logProject = undefined;
      this._logStore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logProject = value.logProject;
      this._logStore = value.logStore;
    }
  }

  // log_project - computed: true, optional: true, required: false
  private _logProject?: string; 
  public get logProject() {
    return this.getStringAttribute('log_project');
  }
  public set logProject(value: string) {
    this._logProject = value;
  }
  public resetLogProject() {
    this._logProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logProjectInput() {
    return this._logProject;
  }

  // log_store - computed: true, optional: true, required: false
  private _logStore?: string; 
  public get logStore() {
    return this.getStringAttribute('log_store');
  }
  public set logStore(value: string) {
    this._logStore = value;
  }
  public resetLogStore() {
    this._logStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStoreInput() {
    return this._logStore;
  }
}
export interface AlbLoadBalancerDeletionProtectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#enabled AlbLoadBalancer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function albLoadBalancerDeletionProtectionConfigToTerraform(struct?: AlbLoadBalancerDeletionProtectionConfigOutputReference | AlbLoadBalancerDeletionProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function albLoadBalancerDeletionProtectionConfigToHclTerraform(struct?: AlbLoadBalancerDeletionProtectionConfigOutputReference | AlbLoadBalancerDeletionProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerDeletionProtectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerDeletionProtectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerDeletionProtectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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

  // enabled_time - computed: true, optional: false, required: false
  public get enabledTime() {
    return this.getStringAttribute('enabled_time');
  }
}
export interface AlbLoadBalancerLoadBalancerBillingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#pay_type AlbLoadBalancer#pay_type}
  */
  readonly payType: string;
}

export function albLoadBalancerLoadBalancerBillingConfigToTerraform(struct?: AlbLoadBalancerLoadBalancerBillingConfigOutputReference | AlbLoadBalancerLoadBalancerBillingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pay_type: cdktf.stringToTerraform(struct!.payType),
  }
}


export function albLoadBalancerLoadBalancerBillingConfigToHclTerraform(struct?: AlbLoadBalancerLoadBalancerBillingConfigOutputReference | AlbLoadBalancerLoadBalancerBillingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pay_type: {
      value: cdktf.stringToHclTerraform(struct!.payType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerLoadBalancerBillingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerLoadBalancerBillingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payType = this._payType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerLoadBalancerBillingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._payType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._payType = value.payType;
    }
  }

  // pay_type - computed: false, optional: false, required: true
  private _payType?: string; 
  public get payType() {
    return this.getStringAttribute('pay_type');
  }
  public set payType(value: string) {
    this._payType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payTypeInput() {
    return this._payType;
  }
}
export interface AlbLoadBalancerModificationProtectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#reason AlbLoadBalancer#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#status AlbLoadBalancer#status}
  */
  readonly status?: string;
}

export function albLoadBalancerModificationProtectionConfigToTerraform(struct?: AlbLoadBalancerModificationProtectionConfigOutputReference | AlbLoadBalancerModificationProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.stringToTerraform(struct!.reason),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function albLoadBalancerModificationProtectionConfigToHclTerraform(struct?: AlbLoadBalancerModificationProtectionConfigOutputReference | AlbLoadBalancerModificationProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerModificationProtectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlbLoadBalancerModificationProtectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerModificationProtectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reason = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reason = value.reason;
      this._status = value.status;
    }
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // status - computed: false, optional: true, required: false
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
}
export interface AlbLoadBalancerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#create AlbLoadBalancer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#delete AlbLoadBalancer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#update AlbLoadBalancer#update}
  */
  readonly update?: string;
}

export function albLoadBalancerTimeoutsToTerraform(struct?: AlbLoadBalancerTimeouts | cdktf.IResolvable): any {
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


export function albLoadBalancerTimeoutsToHclTerraform(struct?: AlbLoadBalancerTimeouts | cdktf.IResolvable): any {
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

export class AlbLoadBalancerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlbLoadBalancerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlbLoadBalancerTimeouts | cdktf.IResolvable | undefined) {
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
export interface AlbLoadBalancerZoneMappingsLoadBalancerAddresses {
}

export function albLoadBalancerZoneMappingsLoadBalancerAddressesToTerraform(struct?: AlbLoadBalancerZoneMappingsLoadBalancerAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function albLoadBalancerZoneMappingsLoadBalancerAddressesToHclTerraform(struct?: AlbLoadBalancerZoneMappingsLoadBalancerAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AlbLoadBalancerZoneMappingsLoadBalancerAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbLoadBalancerZoneMappingsLoadBalancerAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerZoneMappingsLoadBalancerAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // allocation_id - computed: true, optional: false, required: false
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }

  // eip_type - computed: true, optional: false, required: false
  public get eipType() {
    return this.getStringAttribute('eip_type');
  }

  // intranet_address - computed: true, optional: false, required: false
  public get intranetAddress() {
    return this.getStringAttribute('intranet_address');
  }

  // intranet_address_hc_status - computed: true, optional: false, required: false
  public get intranetAddressHcStatus() {
    return this.getStringAttribute('intranet_address_hc_status');
  }

  // ipv4_local_addresses - computed: true, optional: false, required: false
  public get ipv4LocalAddresses() {
    return this.getListAttribute('ipv4_local_addresses');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_address_hc_status - computed: true, optional: false, required: false
  public get ipv6AddressHcStatus() {
    return this.getStringAttribute('ipv6_address_hc_status');
  }

  // ipv6_local_addresses - computed: true, optional: false, required: false
  public get ipv6LocalAddresses() {
    return this.getListAttribute('ipv6_local_addresses');
  }
}

export class AlbLoadBalancerZoneMappingsLoadBalancerAddressesList extends cdktf.ComplexList {

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
  public get(index: number): AlbLoadBalancerZoneMappingsLoadBalancerAddressesOutputReference {
    return new AlbLoadBalancerZoneMappingsLoadBalancerAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbLoadBalancerZoneMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#allocation_id AlbLoadBalancer#allocation_id}
  */
  readonly allocationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#eip_type AlbLoadBalancer#eip_type}
  */
  readonly eipType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#intranet_address AlbLoadBalancer#intranet_address}
  */
  readonly intranetAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#vswitch_id AlbLoadBalancer#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#zone_id AlbLoadBalancer#zone_id}
  */
  readonly zoneId: string;
}

export function albLoadBalancerZoneMappingsToTerraform(struct?: AlbLoadBalancerZoneMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_id: cdktf.stringToTerraform(struct!.allocationId),
    eip_type: cdktf.stringToTerraform(struct!.eipType),
    intranet_address: cdktf.stringToTerraform(struct!.intranetAddress),
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function albLoadBalancerZoneMappingsToHclTerraform(struct?: AlbLoadBalancerZoneMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_id: {
      value: cdktf.stringToHclTerraform(struct!.allocationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eip_type: {
      value: cdktf.stringToHclTerraform(struct!.eipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intranet_address: {
      value: cdktf.stringToHclTerraform(struct!.intranetAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbLoadBalancerZoneMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbLoadBalancerZoneMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationId = this._allocationId;
    }
    if (this._eipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eipType = this._eipType;
    }
    if (this._intranetAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.intranetAddress = this._intranetAddress;
    }
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbLoadBalancerZoneMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationId = undefined;
      this._eipType = undefined;
      this._intranetAddress = undefined;
      this._vswitchId = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationId = value.allocationId;
      this._eipType = value.eipType;
      this._intranetAddress = value.intranetAddress;
      this._vswitchId = value.vswitchId;
      this._zoneId = value.zoneId;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // allocation_id - computed: true, optional: true, required: false
  private _allocationId?: string; 
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }
  public set allocationId(value: string) {
    this._allocationId = value;
  }
  public resetAllocationId() {
    this._allocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationIdInput() {
    return this._allocationId;
  }

  // eip_type - computed: true, optional: true, required: false
  private _eipType?: string; 
  public get eipType() {
    return this.getStringAttribute('eip_type');
  }
  public set eipType(value: string) {
    this._eipType = value;
  }
  public resetEipType() {
    this._eipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipTypeInput() {
    return this._eipType;
  }

  // intranet_address - computed: true, optional: true, required: false
  private _intranetAddress?: string; 
  public get intranetAddress() {
    return this.getStringAttribute('intranet_address');
  }
  public set intranetAddress(value: string) {
    this._intranetAddress = value;
  }
  public resetIntranetAddress() {
    this._intranetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetAddressInput() {
    return this._intranetAddress;
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // load_balancer_addresses - computed: true, optional: false, required: false
  private _loadBalancerAddresses = new AlbLoadBalancerZoneMappingsLoadBalancerAddressesList(this, "load_balancer_addresses", false);
  public get loadBalancerAddresses() {
    return this._loadBalancerAddresses;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}

export class AlbLoadBalancerZoneMappingsList extends cdktf.ComplexList {
  public internalValue? : AlbLoadBalancerZoneMappings[] | cdktf.IResolvable

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
  public get(index: number): AlbLoadBalancerZoneMappingsOutputReference {
    return new AlbLoadBalancerZoneMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer alicloud_alb_load_balancer}
*/
export class AlbLoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alb_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlbLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlbLoadBalancer to import
  * @param importFromId The id of the existing AlbLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlbLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alb_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/alb_load_balancer alicloud_alb_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: AlbLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alb_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressAllocatedMode = config.addressAllocatedMode;
    this._addressIpVersion = config.addressIpVersion;
    this._addressType = config.addressType;
    this._bandwidthPackageId = config.bandwidthPackageId;
    this._deletionProtectionEnabled = config.deletionProtectionEnabled;
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._ipv6AddressType = config.ipv6AddressType;
    this._loadBalancerEdition = config.loadBalancerEdition;
    this._loadBalancerName = config.loadBalancerName;
    this._resourceGroupId = config.resourceGroupId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._accessLogConfig.internalValue = config.accessLogConfig;
    this._deletionProtectionConfig.internalValue = config.deletionProtectionConfig;
    this._loadBalancerBillingConfig.internalValue = config.loadBalancerBillingConfig;
    this._modificationProtectionConfig.internalValue = config.modificationProtectionConfig;
    this._timeouts.internalValue = config.timeouts;
    this._zoneMappings.internalValue = config.zoneMappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_allocated_mode - computed: false, optional: true, required: false
  private _addressAllocatedMode?: string; 
  public get addressAllocatedMode() {
    return this.getStringAttribute('address_allocated_mode');
  }
  public set addressAllocatedMode(value: string) {
    this._addressAllocatedMode = value;
  }
  public resetAddressAllocatedMode() {
    this._addressAllocatedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressAllocatedModeInput() {
    return this._addressAllocatedMode;
  }

  // address_ip_version - computed: true, optional: true, required: false
  private _addressIpVersion?: string; 
  public get addressIpVersion() {
    return this.getStringAttribute('address_ip_version');
  }
  public set addressIpVersion(value: string) {
    this._addressIpVersion = value;
  }
  public resetAddressIpVersion() {
    this._addressIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpVersionInput() {
    return this._addressIpVersion;
  }

  // address_type - computed: false, optional: false, required: true
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // bandwidth_package_id - computed: false, optional: true, required: false
  private _bandwidthPackageId?: string; 
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }
  public set bandwidthPackageId(value: string) {
    this._bandwidthPackageId = value;
  }
  public resetBandwidthPackageId() {
    this._bandwidthPackageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackageIdInput() {
    return this._bandwidthPackageId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection_enabled - computed: true, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
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

  // ipv6_address_type - computed: true, optional: true, required: false
  private _ipv6AddressType?: string; 
  public get ipv6AddressType() {
    return this.getStringAttribute('ipv6_address_type');
  }
  public set ipv6AddressType(value: string) {
    this._ipv6AddressType = value;
  }
  public resetIpv6AddressType() {
    this._ipv6AddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressTypeInput() {
    return this._ipv6AddressType;
  }

  // load_balancer_edition - computed: false, optional: false, required: true
  private _loadBalancerEdition?: string; 
  public get loadBalancerEdition() {
    return this.getStringAttribute('load_balancer_edition');
  }
  public set loadBalancerEdition(value: string) {
    this._loadBalancerEdition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerEditionInput() {
    return this._loadBalancerEdition;
  }

  // load_balancer_name - computed: false, optional: true, required: false
  private _loadBalancerName?: string; 
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  public resetLoadBalancerName() {
    this._loadBalancerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // access_log_config - computed: false, optional: true, required: false
  private _accessLogConfig = new AlbLoadBalancerAccessLogConfigOutputReference(this, "access_log_config");
  public get accessLogConfig() {
    return this._accessLogConfig;
  }
  public putAccessLogConfig(value: AlbLoadBalancerAccessLogConfig) {
    this._accessLogConfig.internalValue = value;
  }
  public resetAccessLogConfig() {
    this._accessLogConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogConfigInput() {
    return this._accessLogConfig.internalValue;
  }

  // deletion_protection_config - computed: false, optional: true, required: false
  private _deletionProtectionConfig = new AlbLoadBalancerDeletionProtectionConfigOutputReference(this, "deletion_protection_config");
  public get deletionProtectionConfig() {
    return this._deletionProtectionConfig;
  }
  public putDeletionProtectionConfig(value: AlbLoadBalancerDeletionProtectionConfig) {
    this._deletionProtectionConfig.internalValue = value;
  }
  public resetDeletionProtectionConfig() {
    this._deletionProtectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionConfigInput() {
    return this._deletionProtectionConfig.internalValue;
  }

  // load_balancer_billing_config - computed: false, optional: false, required: true
  private _loadBalancerBillingConfig = new AlbLoadBalancerLoadBalancerBillingConfigOutputReference(this, "load_balancer_billing_config");
  public get loadBalancerBillingConfig() {
    return this._loadBalancerBillingConfig;
  }
  public putLoadBalancerBillingConfig(value: AlbLoadBalancerLoadBalancerBillingConfig) {
    this._loadBalancerBillingConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerBillingConfigInput() {
    return this._loadBalancerBillingConfig.internalValue;
  }

  // modification_protection_config - computed: false, optional: true, required: false
  private _modificationProtectionConfig = new AlbLoadBalancerModificationProtectionConfigOutputReference(this, "modification_protection_config");
  public get modificationProtectionConfig() {
    return this._modificationProtectionConfig;
  }
  public putModificationProtectionConfig(value: AlbLoadBalancerModificationProtectionConfig) {
    this._modificationProtectionConfig.internalValue = value;
  }
  public resetModificationProtectionConfig() {
    this._modificationProtectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modificationProtectionConfigInput() {
    return this._modificationProtectionConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlbLoadBalancerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlbLoadBalancerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // zone_mappings - computed: false, optional: false, required: true
  private _zoneMappings = new AlbLoadBalancerZoneMappingsList(this, "zone_mappings", true);
  public get zoneMappings() {
    return this._zoneMappings;
  }
  public putZoneMappings(value: AlbLoadBalancerZoneMappings[] | cdktf.IResolvable) {
    this._zoneMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneMappingsInput() {
    return this._zoneMappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_allocated_mode: cdktf.stringToTerraform(this._addressAllocatedMode),
      address_ip_version: cdktf.stringToTerraform(this._addressIpVersion),
      address_type: cdktf.stringToTerraform(this._addressType),
      bandwidth_package_id: cdktf.stringToTerraform(this._bandwidthPackageId),
      deletion_protection_enabled: cdktf.booleanToTerraform(this._deletionProtectionEnabled),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      ipv6_address_type: cdktf.stringToTerraform(this._ipv6AddressType),
      load_balancer_edition: cdktf.stringToTerraform(this._loadBalancerEdition),
      load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      access_log_config: albLoadBalancerAccessLogConfigToTerraform(this._accessLogConfig.internalValue),
      deletion_protection_config: albLoadBalancerDeletionProtectionConfigToTerraform(this._deletionProtectionConfig.internalValue),
      load_balancer_billing_config: albLoadBalancerLoadBalancerBillingConfigToTerraform(this._loadBalancerBillingConfig.internalValue),
      modification_protection_config: albLoadBalancerModificationProtectionConfigToTerraform(this._modificationProtectionConfig.internalValue),
      timeouts: albLoadBalancerTimeoutsToTerraform(this._timeouts.internalValue),
      zone_mappings: cdktf.listMapper(albLoadBalancerZoneMappingsToTerraform, true)(this._zoneMappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_allocated_mode: {
        value: cdktf.stringToHclTerraform(this._addressAllocatedMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_ip_version: {
        value: cdktf.stringToHclTerraform(this._addressIpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_type: {
        value: cdktf.stringToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_package_id: {
        value: cdktf.stringToHclTerraform(this._bandwidthPackageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._deletionProtectionEnabled),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address_type: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_edition: {
        value: cdktf.stringToHclTerraform(this._loadBalancerEdition),
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
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_log_config: {
        value: albLoadBalancerAccessLogConfigToHclTerraform(this._accessLogConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbLoadBalancerAccessLogConfigList",
      },
      deletion_protection_config: {
        value: albLoadBalancerDeletionProtectionConfigToHclTerraform(this._deletionProtectionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbLoadBalancerDeletionProtectionConfigList",
      },
      load_balancer_billing_config: {
        value: albLoadBalancerLoadBalancerBillingConfigToHclTerraform(this._loadBalancerBillingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbLoadBalancerLoadBalancerBillingConfigList",
      },
      modification_protection_config: {
        value: albLoadBalancerModificationProtectionConfigToHclTerraform(this._modificationProtectionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlbLoadBalancerModificationProtectionConfigList",
      },
      timeouts: {
        value: albLoadBalancerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlbLoadBalancerTimeouts",
      },
      zone_mappings: {
        value: cdktf.listMapperHcl(albLoadBalancerZoneMappingsToHclTerraform, true)(this._zoneMappings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbLoadBalancerZoneMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
