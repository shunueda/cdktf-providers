// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway_ha_vip_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyTier0GatewayHaVipConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway_ha_vip_config#id PolicyTier0GatewayHaVipConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway_ha_vip_config#config PolicyTier0GatewayHaVipConfig#config}
  */
  readonly config: PolicyTier0GatewayHaVipConfigConfigA[] | cdktf.IResolvable;
}
export interface PolicyTier0GatewayHaVipConfigConfigA {
  /**
  * Flag to enable this HA VIP config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway_ha_vip_config#enabled PolicyTier0GatewayHaVipConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * paths to Tier0 external interfaces which are to be paired to provide redundancy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway_ha_vip_config#external_interface_paths PolicyTier0GatewayHaVipConfig#external_interface_paths}
  */
  readonly externalInterfacePaths: string[];
  /**
  * IP address subnets which will be used as floating IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway_ha_vip_config#vip_subnets PolicyTier0GatewayHaVipConfig#vip_subnets}
  */
  readonly vipSubnets: string[];
}

export function policyTier0GatewayHaVipConfigConfigAToTerraform(struct?: PolicyTier0GatewayHaVipConfigConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    external_interface_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalInterfacePaths),
    vip_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vipSubnets),
  }
}


export function policyTier0GatewayHaVipConfigConfigAToHclTerraform(struct?: PolicyTier0GatewayHaVipConfigConfigA | cdktf.IResolvable): any {
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
    external_interface_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalInterfacePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vip_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vipSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayHaVipConfigConfigAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0GatewayHaVipConfigConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._externalInterfacePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalInterfacePaths = this._externalInterfacePaths;
    }
    if (this._vipSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipSubnets = this._vipSubnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayHaVipConfigConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._externalInterfacePaths = undefined;
      this._vipSubnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._externalInterfacePaths = value.externalInterfacePaths;
      this._vipSubnets = value.vipSubnets;
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

  // external_interface_paths - computed: false, optional: false, required: true
  private _externalInterfacePaths?: string[]; 
  public get externalInterfacePaths() {
    return this.getListAttribute('external_interface_paths');
  }
  public set externalInterfacePaths(value: string[]) {
    this._externalInterfacePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInterfacePathsInput() {
    return this._externalInterfacePaths;
  }

  // vip_subnets - computed: false, optional: false, required: true
  private _vipSubnets?: string[]; 
  public get vipSubnets() {
    return this.getListAttribute('vip_subnets');
  }
  public set vipSubnets(value: string[]) {
    this._vipSubnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipSubnetsInput() {
    return this._vipSubnets;
  }
}

export class PolicyTier0GatewayHaVipConfigConfigAList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0GatewayHaVipConfigConfigA[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0GatewayHaVipConfigConfigAOutputReference {
    return new PolicyTier0GatewayHaVipConfigConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway_ha_vip_config nsxt_policy_tier0_gateway_ha_vip_config}
*/
export class PolicyTier0GatewayHaVipConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_tier0_gateway_ha_vip_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyTier0GatewayHaVipConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyTier0GatewayHaVipConfig to import
  * @param importFromId The id of the existing PolicyTier0GatewayHaVipConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway_ha_vip_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyTier0GatewayHaVipConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_tier0_gateway_ha_vip_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_tier0_gateway_ha_vip_config nsxt_policy_tier0_gateway_ha_vip_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyTier0GatewayHaVipConfigConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyTier0GatewayHaVipConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_tier0_gateway_ha_vip_config',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
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
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // locale_service_id - computed: true, optional: false, required: false
  public get localeServiceId() {
    return this.getStringAttribute('locale_service_id');
  }

  // tier0_id - computed: true, optional: false, required: false
  public get tier0Id() {
    return this.getStringAttribute('tier0_id');
  }

  // config - computed: false, optional: false, required: true
  private _config = new PolicyTier0GatewayHaVipConfigConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: PolicyTier0GatewayHaVipConfigConfigA[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      config: cdktf.listMapper(policyTier0GatewayHaVipConfigConfigAToTerraform, true)(this._config.internalValue),
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
      config: {
        value: cdktf.listMapperHcl(policyTier0GatewayHaVipConfigConfigAToHclTerraform, true)(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier0GatewayHaVipConfigConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
