// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreInstancePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#compartment_id CoreInstancePool#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#defined_tags CoreInstancePool#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#display_name CoreInstancePool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#freeform_tags CoreInstancePool#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#id CoreInstancePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#instance_configuration_id CoreInstancePool#instance_configuration_id}
  */
  readonly instanceConfigurationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#instance_display_name_formatter CoreInstancePool#instance_display_name_formatter}
  */
  readonly instanceDisplayNameFormatter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#instance_hostname_formatter CoreInstancePool#instance_hostname_formatter}
  */
  readonly instanceHostnameFormatter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#size CoreInstancePool#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#state CoreInstancePool#state}
  */
  readonly state?: string;
  /**
  * lifecycle_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#lifecycle_management CoreInstancePool#lifecycle_management}
  */
  readonly lifecycleManagement?: CoreInstancePoolLifecycleManagement;
  /**
  * load_balancers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#load_balancers CoreInstancePool#load_balancers}
  */
  readonly loadBalancers?: CoreInstancePoolLoadBalancers[] | cdktf.IResolvable;
  /**
  * placement_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#placement_configurations CoreInstancePool#placement_configurations}
  */
  readonly placementConfigurations: CoreInstancePoolPlacementConfigurations[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#timeouts CoreInstancePool#timeouts}
  */
  readonly timeouts?: CoreInstancePoolTimeouts;
}
export interface CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#preserve_block_volume_mode CoreInstancePool#preserve_block_volume_mode}
  */
  readonly preserveBlockVolumeMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#preserve_boot_volume_mode CoreInstancePool#preserve_boot_volume_mode}
  */
  readonly preserveBootVolumeMode: string;
}

export function coreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeoutToTerraform(struct?: CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeoutOutputReference | CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preserve_block_volume_mode: cdktf.stringToTerraform(struct!.preserveBlockVolumeMode),
    preserve_boot_volume_mode: cdktf.stringToTerraform(struct!.preserveBootVolumeMode),
  }
}


export function coreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeoutToHclTerraform(struct?: CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeoutOutputReference | CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preserve_block_volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.preserveBlockVolumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_boot_volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.preserveBootVolumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preserveBlockVolumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveBlockVolumeMode = this._preserveBlockVolumeMode;
    }
    if (this._preserveBootVolumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveBootVolumeMode = this._preserveBootVolumeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preserveBlockVolumeMode = undefined;
      this._preserveBootVolumeMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preserveBlockVolumeMode = value.preserveBlockVolumeMode;
      this._preserveBootVolumeMode = value.preserveBootVolumeMode;
    }
  }

  // preserve_block_volume_mode - computed: false, optional: false, required: true
  private _preserveBlockVolumeMode?: string; 
  public get preserveBlockVolumeMode() {
    return this.getStringAttribute('preserve_block_volume_mode');
  }
  public set preserveBlockVolumeMode(value: string) {
    this._preserveBlockVolumeMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveBlockVolumeModeInput() {
    return this._preserveBlockVolumeMode;
  }

  // preserve_boot_volume_mode - computed: false, optional: false, required: true
  private _preserveBootVolumeMode?: string; 
  public get preserveBootVolumeMode() {
    return this.getStringAttribute('preserve_boot_volume_mode');
  }
  public set preserveBootVolumeMode(value: string) {
    this._preserveBootVolumeMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveBootVolumeModeInput() {
    return this._preserveBootVolumeMode;
  }
}
export interface CoreInstancePoolLifecycleManagementLifecycleActionsPreTermination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#is_enabled CoreInstancePool#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#timeout CoreInstancePool#timeout}
  */
  readonly timeout: number;
  /**
  * on_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#on_timeout CoreInstancePool#on_timeout}
  */
  readonly onTimeout: CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeout;
}

export function coreInstancePoolLifecycleManagementLifecycleActionsPreTerminationToTerraform(struct?: CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOutputReference | CoreInstancePoolLifecycleManagementLifecycleActionsPreTermination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    on_timeout: coreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeoutToTerraform(struct!.onTimeout),
  }
}


export function coreInstancePoolLifecycleManagementLifecycleActionsPreTerminationToHclTerraform(struct?: CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOutputReference | CoreInstancePoolLifecycleManagementLifecycleActionsPreTermination): any {
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
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_timeout: {
      value: coreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeoutToHclTerraform(struct!.onTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstancePoolLifecycleManagementLifecycleActionsPreTermination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._onTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onTimeout = this._onTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePoolLifecycleManagementLifecycleActionsPreTermination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._timeout = undefined;
      this._onTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._timeout = value.timeout;
      this._onTimeout.internalValue = value.onTimeout;
    }
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // on_timeout - computed: false, optional: false, required: true
  private _onTimeout = new CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeoutOutputReference(this, "on_timeout");
  public get onTimeout() {
    return this._onTimeout;
  }
  public putOnTimeout(value: CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOnTimeout) {
    this._onTimeout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onTimeoutInput() {
    return this._onTimeout.internalValue;
  }
}
export interface CoreInstancePoolLifecycleManagementLifecycleActions {
  /**
  * pre_termination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#pre_termination CoreInstancePool#pre_termination}
  */
  readonly preTermination?: CoreInstancePoolLifecycleManagementLifecycleActionsPreTermination;
}

export function coreInstancePoolLifecycleManagementLifecycleActionsToTerraform(struct?: CoreInstancePoolLifecycleManagementLifecycleActionsOutputReference | CoreInstancePoolLifecycleManagementLifecycleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pre_termination: coreInstancePoolLifecycleManagementLifecycleActionsPreTerminationToTerraform(struct!.preTermination),
  }
}


export function coreInstancePoolLifecycleManagementLifecycleActionsToHclTerraform(struct?: CoreInstancePoolLifecycleManagementLifecycleActionsOutputReference | CoreInstancePoolLifecycleManagementLifecycleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pre_termination: {
      value: coreInstancePoolLifecycleManagementLifecycleActionsPreTerminationToHclTerraform(struct!.preTermination),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePoolLifecycleManagementLifecycleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstancePoolLifecycleManagementLifecycleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preTermination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preTermination = this._preTermination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePoolLifecycleManagementLifecycleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preTermination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preTermination.internalValue = value.preTermination;
    }
  }

  // pre_termination - computed: false, optional: true, required: false
  private _preTermination = new CoreInstancePoolLifecycleManagementLifecycleActionsPreTerminationOutputReference(this, "pre_termination");
  public get preTermination() {
    return this._preTermination;
  }
  public putPreTermination(value: CoreInstancePoolLifecycleManagementLifecycleActionsPreTermination) {
    this._preTermination.internalValue = value;
  }
  public resetPreTermination() {
    this._preTermination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preTerminationInput() {
    return this._preTermination.internalValue;
  }
}
export interface CoreInstancePoolLifecycleManagement {
  /**
  * lifecycle_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#lifecycle_actions CoreInstancePool#lifecycle_actions}
  */
  readonly lifecycleActions: CoreInstancePoolLifecycleManagementLifecycleActions;
}

export function coreInstancePoolLifecycleManagementToTerraform(struct?: CoreInstancePoolLifecycleManagementOutputReference | CoreInstancePoolLifecycleManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_actions: coreInstancePoolLifecycleManagementLifecycleActionsToTerraform(struct!.lifecycleActions),
  }
}


export function coreInstancePoolLifecycleManagementToHclTerraform(struct?: CoreInstancePoolLifecycleManagementOutputReference | CoreInstancePoolLifecycleManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifecycle_actions: {
      value: coreInstancePoolLifecycleManagementLifecycleActionsToHclTerraform(struct!.lifecycleActions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstancePoolLifecycleManagementLifecycleActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePoolLifecycleManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstancePoolLifecycleManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleActions = this._lifecycleActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePoolLifecycleManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleActions.internalValue = value.lifecycleActions;
    }
  }

  // lifecycle_actions - computed: false, optional: false, required: true
  private _lifecycleActions = new CoreInstancePoolLifecycleManagementLifecycleActionsOutputReference(this, "lifecycle_actions");
  public get lifecycleActions() {
    return this._lifecycleActions;
  }
  public putLifecycleActions(value: CoreInstancePoolLifecycleManagementLifecycleActions) {
    this._lifecycleActions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleActionsInput() {
    return this._lifecycleActions.internalValue;
  }
}
export interface CoreInstancePoolLoadBalancers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#backend_set_name CoreInstancePool#backend_set_name}
  */
  readonly backendSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#load_balancer_id CoreInstancePool#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#port CoreInstancePool#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#vnic_selection CoreInstancePool#vnic_selection}
  */
  readonly vnicSelection: string;
}

export function coreInstancePoolLoadBalancersToTerraform(struct?: CoreInstancePoolLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_set_name: cdktf.stringToTerraform(struct!.backendSetName),
    load_balancer_id: cdktf.stringToTerraform(struct!.loadBalancerId),
    port: cdktf.numberToTerraform(struct!.port),
    vnic_selection: cdktf.stringToTerraform(struct!.vnicSelection),
  }
}


export function coreInstancePoolLoadBalancersToHclTerraform(struct?: CoreInstancePoolLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_set_name: {
      value: cdktf.stringToHclTerraform(struct!.backendSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerId),
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
    vnic_selection: {
      value: cdktf.stringToHclTerraform(struct!.vnicSelection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePoolLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstancePoolLoadBalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendSetName = this._backendSetName;
    }
    if (this._loadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerId = this._loadBalancerId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._vnicSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicSelection = this._vnicSelection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePoolLoadBalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendSetName = undefined;
      this._loadBalancerId = undefined;
      this._port = undefined;
      this._vnicSelection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendSetName = value.backendSetName;
      this._loadBalancerId = value.loadBalancerId;
      this._port = value.port;
      this._vnicSelection = value.vnicSelection;
    }
  }

  // backend_set_name - computed: false, optional: false, required: true
  private _backendSetName?: string; 
  public get backendSetName() {
    return this.getStringAttribute('backend_set_name');
  }
  public set backendSetName(value: string) {
    this._backendSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendSetNameInput() {
    return this._backendSetName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_pool_id - computed: true, optional: false, required: false
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vnic_selection - computed: false, optional: false, required: true
  private _vnicSelection?: string; 
  public get vnicSelection() {
    return this.getStringAttribute('vnic_selection');
  }
  public set vnicSelection(value: string) {
    this._vnicSelection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicSelectionInput() {
    return this._vnicSelection;
  }
}

export class CoreInstancePoolLoadBalancersList extends cdktf.ComplexList {
  public internalValue? : CoreInstancePoolLoadBalancers[] | cdktf.IResolvable

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
  public get(index: number): CoreInstancePoolLoadBalancersOutputReference {
    return new CoreInstancePoolLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#ipv6subnet_cidr CoreInstancePool#ipv6subnet_cidr}
  */
  readonly ipv6SubnetCidr?: string;
}

export function coreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6subnet_cidr: cdktf.stringToTerraform(struct!.ipv6SubnetCidr),
  }
}


export function coreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6SubnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6SubnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SubnetCidr = this._ipv6SubnetCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6SubnetCidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6SubnetCidr = value.ipv6SubnetCidr;
    }
  }

  // ipv6subnet_cidr - computed: true, optional: true, required: false
  private _ipv6SubnetCidr?: string; 
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
  public set ipv6SubnetCidr(value: string) {
    this._ipv6SubnetCidr = value;
  }
  public resetIpv6SubnetCidr() {
    this._ipv6SubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetCidrInput() {
    return this._ipv6SubnetCidr;
  }
}

export class CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {
  public internalValue? : CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable

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
  public get(index: number): CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#is_assign_ipv6ip CoreInstancePool#is_assign_ipv6ip}
  */
  readonly isAssignIpv6Ip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#subnet_id CoreInstancePool#subnet_id}
  */
  readonly subnetId: string;
  /**
  * ipv6address_ipv6subnet_cidr_pair_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#ipv6address_ipv6subnet_cidr_pair_details CoreInstancePool#ipv6address_ipv6subnet_cidr_pair_details}
  */
  readonly ipv6AddressIpv6SubnetCidrPairDetails?: CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable;
}

export function coreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsToTerraform(struct?: CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference | CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_assign_ipv6ip: cdktf.booleanToTerraform(struct!.isAssignIpv6Ip),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    ipv6address_ipv6subnet_cidr_pair_details: cdktf.listMapper(coreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
  }
}


export function coreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsToHclTerraform(struct?: CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference | CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_assign_ipv6ip: {
      value: cdktf.booleanToHclTerraform(struct!.isAssignIpv6Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6address_ipv6subnet_cidr_pair_details: {
      value: cdktf.listMapperHcl(coreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isAssignIpv6Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAssignIpv6Ip = this._isAssignIpv6Ip;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressIpv6SubnetCidrPairDetails = this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isAssignIpv6Ip = undefined;
      this._subnetId = undefined;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isAssignIpv6Ip = value.isAssignIpv6Ip;
      this._subnetId = value.subnetId;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value.ipv6AddressIpv6SubnetCidrPairDetails;
    }
  }

  // is_assign_ipv6ip - computed: true, optional: true, required: false
  private _isAssignIpv6Ip?: boolean | cdktf.IResolvable; 
  public get isAssignIpv6Ip() {
    return this.getBooleanAttribute('is_assign_ipv6ip');
  }
  public set isAssignIpv6Ip(value: boolean | cdktf.IResolvable) {
    this._isAssignIpv6Ip = value;
  }
  public resetIsAssignIpv6Ip() {
    this._isAssignIpv6Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAssignIpv6IpInput() {
    return this._isAssignIpv6Ip;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: false, optional: true, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }
  public putIpv6AddressIpv6SubnetCidrPairDetails(value: CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable) {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value;
  }
  public resetIpv6AddressIpv6SubnetCidrPairDetails() {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIpv6SubnetCidrPairDetailsInput() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue;
  }
}
export interface CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#ipv6subnet_cidr CoreInstancePool#ipv6subnet_cidr}
  */
  readonly ipv6SubnetCidr?: string;
}

export function coreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6subnet_cidr: cdktf.stringToTerraform(struct!.ipv6SubnetCidr),
  }
}


export function coreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6SubnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6SubnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SubnetCidr = this._ipv6SubnetCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6SubnetCidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6SubnetCidr = value.ipv6SubnetCidr;
    }
  }

  // ipv6subnet_cidr - computed: true, optional: true, required: false
  private _ipv6SubnetCidr?: string; 
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
  public set ipv6SubnetCidr(value: string) {
    this._ipv6SubnetCidr = value;
  }
  public resetIpv6SubnetCidr() {
    this._ipv6SubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetCidrInput() {
    return this._ipv6SubnetCidr;
  }
}

export class CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {
  public internalValue? : CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable

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
  public get(index: number): CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#display_name CoreInstancePool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#is_assign_ipv6ip CoreInstancePool#is_assign_ipv6ip}
  */
  readonly isAssignIpv6Ip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#subnet_id CoreInstancePool#subnet_id}
  */
  readonly subnetId: string;
  /**
  * ipv6address_ipv6subnet_cidr_pair_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#ipv6address_ipv6subnet_cidr_pair_details CoreInstancePool#ipv6address_ipv6subnet_cidr_pair_details}
  */
  readonly ipv6AddressIpv6SubnetCidrPairDetails?: CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable;
}

export function coreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsToTerraform(struct?: CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_assign_ipv6ip: cdktf.booleanToTerraform(struct!.isAssignIpv6Ip),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    ipv6address_ipv6subnet_cidr_pair_details: cdktf.listMapper(coreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
  }
}


export function coreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsToHclTerraform(struct?: CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_assign_ipv6ip: {
      value: cdktf.booleanToHclTerraform(struct!.isAssignIpv6Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6address_ipv6subnet_cidr_pair_details: {
      value: cdktf.listMapperHcl(coreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isAssignIpv6Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAssignIpv6Ip = this._isAssignIpv6Ip;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressIpv6SubnetCidrPairDetails = this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._isAssignIpv6Ip = undefined;
      this._subnetId = undefined;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._isAssignIpv6Ip = value.isAssignIpv6Ip;
      this._subnetId = value.subnetId;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value.ipv6AddressIpv6SubnetCidrPairDetails;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // is_assign_ipv6ip - computed: true, optional: true, required: false
  private _isAssignIpv6Ip?: boolean | cdktf.IResolvable; 
  public get isAssignIpv6Ip() {
    return this.getBooleanAttribute('is_assign_ipv6ip');
  }
  public set isAssignIpv6Ip(value: boolean | cdktf.IResolvable) {
    this._isAssignIpv6Ip = value;
  }
  public resetIsAssignIpv6Ip() {
    this._isAssignIpv6Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAssignIpv6IpInput() {
    return this._isAssignIpv6Ip;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: false, optional: true, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }
  public putIpv6AddressIpv6SubnetCidrPairDetails(value: CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable) {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value;
  }
  public resetIpv6AddressIpv6SubnetCidrPairDetails() {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIpv6SubnetCidrPairDetailsInput() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue;
  }
}

export class CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList extends cdktf.ComplexList {
  public internalValue? : CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets[] | cdktf.IResolvable

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
  public get(index: number): CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference {
    return new CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstancePoolPlacementConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#availability_domain CoreInstancePool#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#fault_domains CoreInstancePool#fault_domains}
  */
  readonly faultDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#primary_subnet_id CoreInstancePool#primary_subnet_id}
  */
  readonly primarySubnetId?: string;
  /**
  * primary_vnic_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#primary_vnic_subnets CoreInstancePool#primary_vnic_subnets}
  */
  readonly primaryVnicSubnets?: CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets;
  /**
  * secondary_vnic_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#secondary_vnic_subnets CoreInstancePool#secondary_vnic_subnets}
  */
  readonly secondaryVnicSubnets?: CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets[] | cdktf.IResolvable;
}

export function coreInstancePoolPlacementConfigurationsToTerraform(struct?: CoreInstancePoolPlacementConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    fault_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.faultDomains),
    primary_subnet_id: cdktf.stringToTerraform(struct!.primarySubnetId),
    primary_vnic_subnets: coreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsToTerraform(struct!.primaryVnicSubnets),
    secondary_vnic_subnets: cdktf.listMapper(coreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsToTerraform, true)(struct!.secondaryVnicSubnets),
  }
}


export function coreInstancePoolPlacementConfigurationsToHclTerraform(struct?: CoreInstancePoolPlacementConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fault_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.faultDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    primary_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.primarySubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_vnic_subnets: {
      value: coreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsToHclTerraform(struct!.primaryVnicSubnets),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsList",
    },
    secondary_vnic_subnets: {
      value: cdktf.listMapperHcl(coreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsToHclTerraform, true)(struct!.secondaryVnicSubnets),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstancePoolPlacementConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstancePoolPlacementConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._faultDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultDomains = this._faultDomains;
    }
    if (this._primarySubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySubnetId = this._primarySubnetId;
    }
    if (this._primaryVnicSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryVnicSubnets = this._primaryVnicSubnets?.internalValue;
    }
    if (this._secondaryVnicSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryVnicSubnets = this._secondaryVnicSubnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstancePoolPlacementConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityDomain = undefined;
      this._faultDomains = undefined;
      this._primarySubnetId = undefined;
      this._primaryVnicSubnets.internalValue = undefined;
      this._secondaryVnicSubnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityDomain = value.availabilityDomain;
      this._faultDomains = value.faultDomains;
      this._primarySubnetId = value.primarySubnetId;
      this._primaryVnicSubnets.internalValue = value.primaryVnicSubnets;
      this._secondaryVnicSubnets.internalValue = value.secondaryVnicSubnets;
    }
  }

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // fault_domains - computed: true, optional: true, required: false
  private _faultDomains?: string[]; 
  public get faultDomains() {
    return this.getListAttribute('fault_domains');
  }
  public set faultDomains(value: string[]) {
    this._faultDomains = value;
  }
  public resetFaultDomains() {
    this._faultDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainsInput() {
    return this._faultDomains;
  }

  // primary_subnet_id - computed: true, optional: true, required: false
  private _primarySubnetId?: string; 
  public get primarySubnetId() {
    return this.getStringAttribute('primary_subnet_id');
  }
  public set primarySubnetId(value: string) {
    this._primarySubnetId = value;
  }
  public resetPrimarySubnetId() {
    this._primarySubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySubnetIdInput() {
    return this._primarySubnetId;
  }

  // primary_vnic_subnets - computed: false, optional: true, required: false
  private _primaryVnicSubnets = new CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnetsOutputReference(this, "primary_vnic_subnets");
  public get primaryVnicSubnets() {
    return this._primaryVnicSubnets;
  }
  public putPrimaryVnicSubnets(value: CoreInstancePoolPlacementConfigurationsPrimaryVnicSubnets) {
    this._primaryVnicSubnets.internalValue = value;
  }
  public resetPrimaryVnicSubnets() {
    this._primaryVnicSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryVnicSubnetsInput() {
    return this._primaryVnicSubnets.internalValue;
  }

  // secondary_vnic_subnets - computed: false, optional: true, required: false
  private _secondaryVnicSubnets = new CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnetsList(this, "secondary_vnic_subnets", false);
  public get secondaryVnicSubnets() {
    return this._secondaryVnicSubnets;
  }
  public putSecondaryVnicSubnets(value: CoreInstancePoolPlacementConfigurationsSecondaryVnicSubnets[] | cdktf.IResolvable) {
    this._secondaryVnicSubnets.internalValue = value;
  }
  public resetSecondaryVnicSubnets() {
    this._secondaryVnicSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryVnicSubnetsInput() {
    return this._secondaryVnicSubnets.internalValue;
  }
}

export class CoreInstancePoolPlacementConfigurationsList extends cdktf.ComplexList {
  public internalValue? : CoreInstancePoolPlacementConfigurations[] | cdktf.IResolvable

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
  public get(index: number): CoreInstancePoolPlacementConfigurationsOutputReference {
    return new CoreInstancePoolPlacementConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstancePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#create CoreInstancePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#delete CoreInstancePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#update CoreInstancePool#update}
  */
  readonly update?: string;
}

export function coreInstancePoolTimeoutsToTerraform(struct?: CoreInstancePoolTimeouts | cdktf.IResolvable): any {
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


export function coreInstancePoolTimeoutsToHclTerraform(struct?: CoreInstancePoolTimeouts | cdktf.IResolvable): any {
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

export class CoreInstancePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreInstancePoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreInstancePoolTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool oci_core_instance_pool}
*/
export class CoreInstancePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_instance_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreInstancePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreInstancePool to import
  * @param importFromId The id of the existing CoreInstancePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreInstancePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_instance_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_instance_pool oci_core_instance_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreInstancePoolConfig
  */
  public constructor(scope: Construct, id: string, config: CoreInstancePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance_pool',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._instanceConfigurationId = config.instanceConfigurationId;
    this._instanceDisplayNameFormatter = config.instanceDisplayNameFormatter;
    this._instanceHostnameFormatter = config.instanceHostnameFormatter;
    this._size = config.size;
    this._state = config.state;
    this._lifecycleManagement.internalValue = config.lifecycleManagement;
    this._loadBalancers.internalValue = config.loadBalancers;
    this._placementConfigurations.internalValue = config.placementConfigurations;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_size - computed: true, optional: false, required: false
  public get actualSize() {
    return this.getNumberAttribute('actual_size');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // instance_configuration_id - computed: false, optional: false, required: true
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // instance_display_name_formatter - computed: true, optional: true, required: false
  private _instanceDisplayNameFormatter?: string; 
  public get instanceDisplayNameFormatter() {
    return this.getStringAttribute('instance_display_name_formatter');
  }
  public set instanceDisplayNameFormatter(value: string) {
    this._instanceDisplayNameFormatter = value;
  }
  public resetInstanceDisplayNameFormatter() {
    this._instanceDisplayNameFormatter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceDisplayNameFormatterInput() {
    return this._instanceDisplayNameFormatter;
  }

  // instance_hostname_formatter - computed: true, optional: true, required: false
  private _instanceHostnameFormatter?: string; 
  public get instanceHostnameFormatter() {
    return this.getStringAttribute('instance_hostname_formatter');
  }
  public set instanceHostnameFormatter(value: string) {
    this._instanceHostnameFormatter = value;
  }
  public resetInstanceHostnameFormatter() {
    this._instanceHostnameFormatter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceHostnameFormatterInput() {
    return this._instanceHostnameFormatter;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // lifecycle_management - computed: false, optional: true, required: false
  private _lifecycleManagement = new CoreInstancePoolLifecycleManagementOutputReference(this, "lifecycle_management");
  public get lifecycleManagement() {
    return this._lifecycleManagement;
  }
  public putLifecycleManagement(value: CoreInstancePoolLifecycleManagement) {
    this._lifecycleManagement.internalValue = value;
  }
  public resetLifecycleManagement() {
    this._lifecycleManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleManagementInput() {
    return this._lifecycleManagement.internalValue;
  }

  // load_balancers - computed: false, optional: true, required: false
  private _loadBalancers = new CoreInstancePoolLoadBalancersList(this, "load_balancers", true);
  public get loadBalancers() {
    return this._loadBalancers;
  }
  public putLoadBalancers(value: CoreInstancePoolLoadBalancers[] | cdktf.IResolvable) {
    this._loadBalancers.internalValue = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers.internalValue;
  }

  // placement_configurations - computed: false, optional: false, required: true
  private _placementConfigurations = new CoreInstancePoolPlacementConfigurationsList(this, "placement_configurations", false);
  public get placementConfigurations() {
    return this._placementConfigurations;
  }
  public putPlacementConfigurations(value: CoreInstancePoolPlacementConfigurations[] | cdktf.IResolvable) {
    this._placementConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConfigurationsInput() {
    return this._placementConfigurations.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreInstancePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreInstancePoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      instance_configuration_id: cdktf.stringToTerraform(this._instanceConfigurationId),
      instance_display_name_formatter: cdktf.stringToTerraform(this._instanceDisplayNameFormatter),
      instance_hostname_formatter: cdktf.stringToTerraform(this._instanceHostnameFormatter),
      size: cdktf.numberToTerraform(this._size),
      state: cdktf.stringToTerraform(this._state),
      lifecycle_management: coreInstancePoolLifecycleManagementToTerraform(this._lifecycleManagement.internalValue),
      load_balancers: cdktf.listMapper(coreInstancePoolLoadBalancersToTerraform, true)(this._loadBalancers.internalValue),
      placement_configurations: cdktf.listMapper(coreInstancePoolPlacementConfigurationsToTerraform, true)(this._placementConfigurations.internalValue),
      timeouts: coreInstancePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_configuration_id: {
        value: cdktf.stringToHclTerraform(this._instanceConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_display_name_formatter: {
        value: cdktf.stringToHclTerraform(this._instanceDisplayNameFormatter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_hostname_formatter: {
        value: cdktf.stringToHclTerraform(this._instanceHostnameFormatter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_management: {
        value: coreInstancePoolLifecycleManagementToHclTerraform(this._lifecycleManagement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstancePoolLifecycleManagementList",
      },
      load_balancers: {
        value: cdktf.listMapperHcl(coreInstancePoolLoadBalancersToHclTerraform, true)(this._loadBalancers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CoreInstancePoolLoadBalancersList",
      },
      placement_configurations: {
        value: cdktf.listMapperHcl(coreInstancePoolPlacementConfigurationsToHclTerraform, true)(this._placementConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstancePoolPlacementConfigurationsList",
      },
      timeouts: {
        value: coreInstancePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreInstancePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
