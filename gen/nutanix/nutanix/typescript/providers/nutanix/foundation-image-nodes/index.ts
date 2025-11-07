// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FoundationImageNodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#cvm_gateway FoundationImageNodes#cvm_gateway}
  */
  readonly cvmGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#cvm_netmask FoundationImageNodes#cvm_netmask}
  */
  readonly cvmNetmask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hyperv_external_vnic FoundationImageNodes#hyperv_external_vnic}
  */
  readonly hypervExternalVnic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hyperv_external_vswitch FoundationImageNodes#hyperv_external_vswitch}
  */
  readonly hypervExternalVswitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hyperv_product_key FoundationImageNodes#hyperv_product_key}
  */
  readonly hypervProductKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hyperv_sku FoundationImageNodes#hyperv_sku}
  */
  readonly hypervSku?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hypervisor_gateway FoundationImageNodes#hypervisor_gateway}
  */
  readonly hypervisorGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hypervisor_nameserver FoundationImageNodes#hypervisor_nameserver}
  */
  readonly hypervisorNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hypervisor_netmask FoundationImageNodes#hypervisor_netmask}
  */
  readonly hypervisorNetmask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hypervisor_password FoundationImageNodes#hypervisor_password}
  */
  readonly hypervisorPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#id FoundationImageNodes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#install_script FoundationImageNodes#install_script}
  */
  readonly installScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ipmi_gateway FoundationImageNodes#ipmi_gateway}
  */
  readonly ipmiGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ipmi_netmask FoundationImageNodes#ipmi_netmask}
  */
  readonly ipmiNetmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ipmi_password FoundationImageNodes#ipmi_password}
  */
  readonly ipmiPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ipmi_user FoundationImageNodes#ipmi_user}
  */
  readonly ipmiUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#layout_egg_uuid FoundationImageNodes#layout_egg_uuid}
  */
  readonly layoutEggUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#nos_package FoundationImageNodes#nos_package}
  */
  readonly nosPackage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#skip_hypervisor FoundationImageNodes#skip_hypervisor}
  */
  readonly skipHypervisor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#svm_rescue_args FoundationImageNodes#svm_rescue_args}
  */
  readonly svmRescueArgs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ucsm_ip FoundationImageNodes#ucsm_ip}
  */
  readonly ucsmIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ucsm_password FoundationImageNodes#ucsm_password}
  */
  readonly ucsmPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ucsm_user FoundationImageNodes#ucsm_user}
  */
  readonly ucsmUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#unc_password FoundationImageNodes#unc_password}
  */
  readonly uncPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#unc_path FoundationImageNodes#unc_path}
  */
  readonly uncPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#unc_username FoundationImageNodes#unc_username}
  */
  readonly uncUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#xen_config_type FoundationImageNodes#xen_config_type}
  */
  readonly xenConfigType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#xs_master_ip FoundationImageNodes#xs_master_ip}
  */
  readonly xsMasterIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#xs_master_label FoundationImageNodes#xs_master_label}
  */
  readonly xsMasterLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#xs_master_password FoundationImageNodes#xs_master_password}
  */
  readonly xsMasterPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#xs_master_username FoundationImageNodes#xs_master_username}
  */
  readonly xsMasterUsername?: string;
  /**
  * blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#blocks FoundationImageNodes#blocks}
  */
  readonly blocks: FoundationImageNodesBlocks[] | cdktf.IResolvable;
  /**
  * clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#clusters FoundationImageNodes#clusters}
  */
  readonly clusters?: FoundationImageNodesClusters[] | cdktf.IResolvable;
  /**
  * eos_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#eos_metadata FoundationImageNodes#eos_metadata}
  */
  readonly eosMetadata?: FoundationImageNodesEosMetadata;
  /**
  * fc_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#fc_settings FoundationImageNodes#fc_settings}
  */
  readonly fcSettings?: FoundationImageNodesFcSettings;
  /**
  * hypervisor_iso block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hypervisor_iso FoundationImageNodes#hypervisor_iso}
  */
  readonly hypervisorIso?: FoundationImageNodesHypervisorIso;
  /**
  * tests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#tests FoundationImageNodes#tests}
  */
  readonly tests?: FoundationImageNodesTests;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#timeouts FoundationImageNodes#timeouts}
  */
  readonly timeouts?: FoundationImageNodesTimeouts;
}
export interface FoundationImageNodesClusterUrls {
}

export function foundationImageNodesClusterUrlsToTerraform(struct?: FoundationImageNodesClusterUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function foundationImageNodesClusterUrlsToHclTerraform(struct?: FoundationImageNodesClusterUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FoundationImageNodesClusterUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationImageNodesClusterUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesClusterUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_url - computed: true, optional: false, required: false
  public get clusterUrl() {
    return this.getStringAttribute('cluster_url');
  }
}

export class FoundationImageNodesClusterUrlsList extends cdktf.ComplexList {

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
  public get(index: number): FoundationImageNodesClusterUrlsOutputReference {
    return new FoundationImageNodesClusterUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationImageNodesBlocksNodesUcsmParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#keep_ucsm_settings FoundationImageNodes#keep_ucsm_settings}
  */
  readonly keepUcsmSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#mac_pool FoundationImageNodes#mac_pool}
  */
  readonly macPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#native_vlan FoundationImageNodes#native_vlan}
  */
  readonly nativeVlan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#vlan_name FoundationImageNodes#vlan_name}
  */
  readonly vlanName?: string;
}

export function foundationImageNodesBlocksNodesUcsmParamsToTerraform(struct?: FoundationImageNodesBlocksNodesUcsmParamsOutputReference | FoundationImageNodesBlocksNodesUcsmParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_ucsm_settings: cdktf.booleanToTerraform(struct!.keepUcsmSettings),
    mac_pool: cdktf.stringToTerraform(struct!.macPool),
    native_vlan: cdktf.booleanToTerraform(struct!.nativeVlan),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function foundationImageNodesBlocksNodesUcsmParamsToHclTerraform(struct?: FoundationImageNodesBlocksNodesUcsmParamsOutputReference | FoundationImageNodesBlocksNodesUcsmParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_ucsm_settings: {
      value: cdktf.booleanToHclTerraform(struct!.keepUcsmSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_pool: {
      value: cdktf.stringToHclTerraform(struct!.macPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native_vlan: {
      value: cdktf.booleanToHclTerraform(struct!.nativeVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesBlocksNodesUcsmParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationImageNodesBlocksNodesUcsmParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepUcsmSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepUcsmSettings = this._keepUcsmSettings;
    }
    if (this._macPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.macPool = this._macPool;
    }
    if (this._nativeVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeVlan = this._nativeVlan;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesBlocksNodesUcsmParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keepUcsmSettings = undefined;
      this._macPool = undefined;
      this._nativeVlan = undefined;
      this._vlanName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keepUcsmSettings = value.keepUcsmSettings;
      this._macPool = value.macPool;
      this._nativeVlan = value.nativeVlan;
      this._vlanName = value.vlanName;
    }
  }

  // keep_ucsm_settings - computed: false, optional: true, required: false
  private _keepUcsmSettings?: boolean | cdktf.IResolvable; 
  public get keepUcsmSettings() {
    return this.getBooleanAttribute('keep_ucsm_settings');
  }
  public set keepUcsmSettings(value: boolean | cdktf.IResolvable) {
    this._keepUcsmSettings = value;
  }
  public resetKeepUcsmSettings() {
    this._keepUcsmSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepUcsmSettingsInput() {
    return this._keepUcsmSettings;
  }

  // mac_pool - computed: false, optional: true, required: false
  private _macPool?: string; 
  public get macPool() {
    return this.getStringAttribute('mac_pool');
  }
  public set macPool(value: string) {
    this._macPool = value;
  }
  public resetMacPool() {
    this._macPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macPoolInput() {
    return this._macPool;
  }

  // native_vlan - computed: false, optional: true, required: false
  private _nativeVlan?: boolean | cdktf.IResolvable; 
  public get nativeVlan() {
    return this.getBooleanAttribute('native_vlan');
  }
  public set nativeVlan(value: boolean | cdktf.IResolvable) {
    this._nativeVlan = value;
  }
  public resetNativeVlan() {
    this._nativeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeVlanInput() {
    return this._nativeVlan;
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}
export interface FoundationImageNodesBlocksNodesVswitches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#bond_mode FoundationImageNodes#bond_mode}
  */
  readonly bondMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#lacp FoundationImageNodes#lacp}
  */
  readonly lacp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#mtu FoundationImageNodes#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#name FoundationImageNodes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#other_config FoundationImageNodes#other_config}
  */
  readonly otherConfig?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#uplinks FoundationImageNodes#uplinks}
  */
  readonly uplinks?: string[];
}

export function foundationImageNodesBlocksNodesVswitchesToTerraform(struct?: FoundationImageNodesBlocksNodesVswitches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_mode: cdktf.stringToTerraform(struct!.bondMode),
    lacp: cdktf.stringToTerraform(struct!.lacp),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    other_config: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.otherConfig),
    uplinks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uplinks),
  }
}


export function foundationImageNodesBlocksNodesVswitchesToHclTerraform(struct?: FoundationImageNodesBlocksNodesVswitches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bond_mode: {
      value: cdktf.stringToHclTerraform(struct!.bondMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lacp: {
      value: cdktf.stringToHclTerraform(struct!.lacp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_config: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.otherConfig),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uplinks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uplinks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesBlocksNodesVswitchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationImageNodesBlocksNodesVswitches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bondMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondMode = this._bondMode;
    }
    if (this._lacp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._otherConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherConfig = this._otherConfig;
    }
    if (this._uplinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinks = this._uplinks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesBlocksNodesVswitches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bondMode = undefined;
      this._lacp = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._otherConfig = undefined;
      this._uplinks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bondMode = value.bondMode;
      this._lacp = value.lacp;
      this._mtu = value.mtu;
      this._name = value.name;
      this._otherConfig = value.otherConfig;
      this._uplinks = value.uplinks;
    }
  }

  // bond_mode - computed: false, optional: true, required: false
  private _bondMode?: string; 
  public get bondMode() {
    return this.getStringAttribute('bond_mode');
  }
  public set bondMode(value: string) {
    this._bondMode = value;
  }
  public resetBondMode() {
    this._bondMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondModeInput() {
    return this._bondMode;
  }

  // lacp - computed: false, optional: true, required: false
  private _lacp?: string; 
  public get lacp() {
    return this.getStringAttribute('lacp');
  }
  public set lacp(value: string) {
    this._lacp = value;
  }
  public resetLacp() {
    this._lacp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // other_config - computed: false, optional: true, required: false
  private _otherConfig?: string[]; 
  public get otherConfig() {
    return this.getListAttribute('other_config');
  }
  public set otherConfig(value: string[]) {
    this._otherConfig = value;
  }
  public resetOtherConfig() {
    this._otherConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherConfigInput() {
    return this._otherConfig;
  }

  // uplinks - computed: false, optional: true, required: false
  private _uplinks?: string[]; 
  public get uplinks() {
    return this.getListAttribute('uplinks');
  }
  public set uplinks(value: string[]) {
    this._uplinks = value;
  }
  public resetUplinks() {
    this._uplinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinksInput() {
    return this._uplinks;
  }
}

export class FoundationImageNodesBlocksNodesVswitchesList extends cdktf.ComplexList {
  public internalValue? : FoundationImageNodesBlocksNodesVswitches[] | cdktf.IResolvable

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
  public get(index: number): FoundationImageNodesBlocksNodesVswitchesOutputReference {
    return new FoundationImageNodesBlocksNodesVswitchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationImageNodesBlocksNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#bond_lacp_rate FoundationImageNodes#bond_lacp_rate}
  */
  readonly bondLacpRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#bond_mode FoundationImageNodes#bond_mode}
  */
  readonly bondMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#bond_uplinks FoundationImageNodes#bond_uplinks}
  */
  readonly bondUplinks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#cluster_id FoundationImageNodes#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#current_cvm_vlan_tag FoundationImageNodes#current_cvm_vlan_tag}
  */
  readonly currentCvmVlanTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#current_network_interface FoundationImageNodes#current_network_interface}
  */
  readonly currentNetworkInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#cvm_gb_ram FoundationImageNodes#cvm_gb_ram}
  */
  readonly cvmGbRam?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#cvm_ip FoundationImageNodes#cvm_ip}
  */
  readonly cvmIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#cvm_num_vcpus FoundationImageNodes#cvm_num_vcpus}
  */
  readonly cvmNumVcpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#device_hint FoundationImageNodes#device_hint}
  */
  readonly deviceHint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#exlude_boot_serial FoundationImageNodes#exlude_boot_serial}
  */
  readonly exludeBootSerial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hypervisor FoundationImageNodes#hypervisor}
  */
  readonly hypervisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hypervisor_hostname FoundationImageNodes#hypervisor_hostname}
  */
  readonly hypervisorHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hypervisor_ip FoundationImageNodes#hypervisor_ip}
  */
  readonly hypervisorIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#image_delay FoundationImageNodes#image_delay}
  */
  readonly imageDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#image_now FoundationImageNodes#image_now}
  */
  readonly imageNow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#image_successful FoundationImageNodes#image_successful}
  */
  readonly imageSuccessful?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ipmi_configure_now FoundationImageNodes#ipmi_configure_now}
  */
  readonly ipmiConfigureNow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ipmi_gateway FoundationImageNodes#ipmi_gateway}
  */
  readonly ipmiGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ipmi_ip FoundationImageNodes#ipmi_ip}
  */
  readonly ipmiIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ipmi_mac FoundationImageNodes#ipmi_mac}
  */
  readonly ipmiMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ipmi_netmask FoundationImageNodes#ipmi_netmask}
  */
  readonly ipmiNetmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ipmi_password FoundationImageNodes#ipmi_password}
  */
  readonly ipmiPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ipmi_user FoundationImageNodes#ipmi_user}
  */
  readonly ipmiUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ipv6_address FoundationImageNodes#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ipv6_interface FoundationImageNodes#ipv6_interface}
  */
  readonly ipv6Interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#mitigate_low_boot_space FoundationImageNodes#mitigate_low_boot_space}
  */
  readonly mitigateLowBootSpace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#node_position FoundationImageNodes#node_position}
  */
  readonly nodePosition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#node_serial FoundationImageNodes#node_serial}
  */
  readonly nodeSerial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#rdma_mac_addr FoundationImageNodes#rdma_mac_addr}
  */
  readonly rdmaMacAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#rdma_passthrough FoundationImageNodes#rdma_passthrough}
  */
  readonly rdmaPassthrough?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ucsm_managed_mode FoundationImageNodes#ucsm_managed_mode}
  */
  readonly ucsmManagedMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ucsm_node_serial FoundationImageNodes#ucsm_node_serial}
  */
  readonly ucsmNodeSerial?: string;
  /**
  * ucsm_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#ucsm_params FoundationImageNodes#ucsm_params}
  */
  readonly ucsmParams?: FoundationImageNodesBlocksNodesUcsmParams;
  /**
  * vswitches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#vswitches FoundationImageNodes#vswitches}
  */
  readonly vswitches?: FoundationImageNodesBlocksNodesVswitches[] | cdktf.IResolvable;
}

export function foundationImageNodesBlocksNodesToTerraform(struct?: FoundationImageNodesBlocksNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bond_lacp_rate: cdktf.stringToTerraform(struct!.bondLacpRate),
    bond_mode: cdktf.stringToTerraform(struct!.bondMode),
    bond_uplinks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bondUplinks),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    current_cvm_vlan_tag: cdktf.numberToTerraform(struct!.currentCvmVlanTag),
    current_network_interface: cdktf.stringToTerraform(struct!.currentNetworkInterface),
    cvm_gb_ram: cdktf.numberToTerraform(struct!.cvmGbRam),
    cvm_ip: cdktf.stringToTerraform(struct!.cvmIp),
    cvm_num_vcpus: cdktf.numberToTerraform(struct!.cvmNumVcpus),
    device_hint: cdktf.stringToTerraform(struct!.deviceHint),
    exlude_boot_serial: cdktf.stringToTerraform(struct!.exludeBootSerial),
    hypervisor: cdktf.stringToTerraform(struct!.hypervisor),
    hypervisor_hostname: cdktf.stringToTerraform(struct!.hypervisorHostname),
    hypervisor_ip: cdktf.stringToTerraform(struct!.hypervisorIp),
    image_delay: cdktf.numberToTerraform(struct!.imageDelay),
    image_now: cdktf.booleanToTerraform(struct!.imageNow),
    image_successful: cdktf.booleanToTerraform(struct!.imageSuccessful),
    ipmi_configure_now: cdktf.booleanToTerraform(struct!.ipmiConfigureNow),
    ipmi_gateway: cdktf.stringToTerraform(struct!.ipmiGateway),
    ipmi_ip: cdktf.stringToTerraform(struct!.ipmiIp),
    ipmi_mac: cdktf.stringToTerraform(struct!.ipmiMac),
    ipmi_netmask: cdktf.stringToTerraform(struct!.ipmiNetmask),
    ipmi_password: cdktf.stringToTerraform(struct!.ipmiPassword),
    ipmi_user: cdktf.stringToTerraform(struct!.ipmiUser),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_interface: cdktf.stringToTerraform(struct!.ipv6Interface),
    mitigate_low_boot_space: cdktf.booleanToTerraform(struct!.mitigateLowBootSpace),
    node_position: cdktf.stringToTerraform(struct!.nodePosition),
    node_serial: cdktf.stringToTerraform(struct!.nodeSerial),
    rdma_mac_addr: cdktf.stringToTerraform(struct!.rdmaMacAddr),
    rdma_passthrough: cdktf.booleanToTerraform(struct!.rdmaPassthrough),
    ucsm_managed_mode: cdktf.stringToTerraform(struct!.ucsmManagedMode),
    ucsm_node_serial: cdktf.stringToTerraform(struct!.ucsmNodeSerial),
    ucsm_params: foundationImageNodesBlocksNodesUcsmParamsToTerraform(struct!.ucsmParams),
    vswitches: cdktf.listMapper(foundationImageNodesBlocksNodesVswitchesToTerraform, true)(struct!.vswitches),
  }
}


export function foundationImageNodesBlocksNodesToHclTerraform(struct?: FoundationImageNodesBlocksNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bond_lacp_rate: {
      value: cdktf.stringToHclTerraform(struct!.bondLacpRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bond_mode: {
      value: cdktf.stringToHclTerraform(struct!.bondMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bond_uplinks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bondUplinks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_cvm_vlan_tag: {
      value: cdktf.numberToHclTerraform(struct!.currentCvmVlanTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_network_interface: {
      value: cdktf.stringToHclTerraform(struct!.currentNetworkInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvm_gb_ram: {
      value: cdktf.numberToHclTerraform(struct!.cvmGbRam),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cvm_ip: {
      value: cdktf.stringToHclTerraform(struct!.cvmIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvm_num_vcpus: {
      value: cdktf.numberToHclTerraform(struct!.cvmNumVcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_hint: {
      value: cdktf.stringToHclTerraform(struct!.deviceHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exlude_boot_serial: {
      value: cdktf.stringToHclTerraform(struct!.exludeBootSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor: {
      value: cdktf.stringToHclTerraform(struct!.hypervisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_hostname: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_ip: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_delay: {
      value: cdktf.numberToHclTerraform(struct!.imageDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_now: {
      value: cdktf.booleanToHclTerraform(struct!.imageNow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_successful: {
      value: cdktf.booleanToHclTerraform(struct!.imageSuccessful),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipmi_configure_now: {
      value: cdktf.booleanToHclTerraform(struct!.ipmiConfigureNow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipmi_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipmiGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipmi_ip: {
      value: cdktf.stringToHclTerraform(struct!.ipmiIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipmi_mac: {
      value: cdktf.stringToHclTerraform(struct!.ipmiMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipmi_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipmiNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipmi_password: {
      value: cdktf.stringToHclTerraform(struct!.ipmiPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipmi_user: {
      value: cdktf.stringToHclTerraform(struct!.ipmiUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_interface: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mitigate_low_boot_space: {
      value: cdktf.booleanToHclTerraform(struct!.mitigateLowBootSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_position: {
      value: cdktf.stringToHclTerraform(struct!.nodePosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_serial: {
      value: cdktf.stringToHclTerraform(struct!.nodeSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdma_mac_addr: {
      value: cdktf.stringToHclTerraform(struct!.rdmaMacAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdma_passthrough: {
      value: cdktf.booleanToHclTerraform(struct!.rdmaPassthrough),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ucsm_managed_mode: {
      value: cdktf.stringToHclTerraform(struct!.ucsmManagedMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ucsm_node_serial: {
      value: cdktf.stringToHclTerraform(struct!.ucsmNodeSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ucsm_params: {
      value: foundationImageNodesBlocksNodesUcsmParamsToHclTerraform(struct!.ucsmParams),
      isBlock: true,
      type: "list",
      storageClassType: "FoundationImageNodesBlocksNodesUcsmParamsList",
    },
    vswitches: {
      value: cdktf.listMapperHcl(foundationImageNodesBlocksNodesVswitchesToHclTerraform, true)(struct!.vswitches),
      isBlock: true,
      type: "list",
      storageClassType: "FoundationImageNodesBlocksNodesVswitchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesBlocksNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationImageNodesBlocksNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bondLacpRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondLacpRate = this._bondLacpRate;
    }
    if (this._bondMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondMode = this._bondMode;
    }
    if (this._bondUplinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondUplinks = this._bondUplinks;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._currentCvmVlanTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentCvmVlanTag = this._currentCvmVlanTag;
    }
    if (this._currentNetworkInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentNetworkInterface = this._currentNetworkInterface;
    }
    if (this._cvmGbRam !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmGbRam = this._cvmGbRam;
    }
    if (this._cvmIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmIp = this._cvmIp;
    }
    if (this._cvmNumVcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmNumVcpus = this._cvmNumVcpus;
    }
    if (this._deviceHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceHint = this._deviceHint;
    }
    if (this._exludeBootSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.exludeBootSerial = this._exludeBootSerial;
    }
    if (this._hypervisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisor = this._hypervisor;
    }
    if (this._hypervisorHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorHostname = this._hypervisorHostname;
    }
    if (this._hypervisorIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorIp = this._hypervisorIp;
    }
    if (this._imageDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDelay = this._imageDelay;
    }
    if (this._imageNow !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageNow = this._imageNow;
    }
    if (this._imageSuccessful !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSuccessful = this._imageSuccessful;
    }
    if (this._ipmiConfigureNow !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiConfigureNow = this._ipmiConfigureNow;
    }
    if (this._ipmiGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiGateway = this._ipmiGateway;
    }
    if (this._ipmiIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiIp = this._ipmiIp;
    }
    if (this._ipmiMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiMac = this._ipmiMac;
    }
    if (this._ipmiNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiNetmask = this._ipmiNetmask;
    }
    if (this._ipmiPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiPassword = this._ipmiPassword;
    }
    if (this._ipmiUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiUser = this._ipmiUser;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6Interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Interface = this._ipv6Interface;
    }
    if (this._mitigateLowBootSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigateLowBootSpace = this._mitigateLowBootSpace;
    }
    if (this._nodePosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePosition = this._nodePosition;
    }
    if (this._nodeSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSerial = this._nodeSerial;
    }
    if (this._rdmaMacAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdmaMacAddr = this._rdmaMacAddr;
    }
    if (this._rdmaPassthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdmaPassthrough = this._rdmaPassthrough;
    }
    if (this._ucsmManagedMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucsmManagedMode = this._ucsmManagedMode;
    }
    if (this._ucsmNodeSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucsmNodeSerial = this._ucsmNodeSerial;
    }
    if (this._ucsmParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucsmParams = this._ucsmParams?.internalValue;
    }
    if (this._vswitches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitches = this._vswitches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesBlocksNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bondLacpRate = undefined;
      this._bondMode = undefined;
      this._bondUplinks = undefined;
      this._clusterId = undefined;
      this._currentCvmVlanTag = undefined;
      this._currentNetworkInterface = undefined;
      this._cvmGbRam = undefined;
      this._cvmIp = undefined;
      this._cvmNumVcpus = undefined;
      this._deviceHint = undefined;
      this._exludeBootSerial = undefined;
      this._hypervisor = undefined;
      this._hypervisorHostname = undefined;
      this._hypervisorIp = undefined;
      this._imageDelay = undefined;
      this._imageNow = undefined;
      this._imageSuccessful = undefined;
      this._ipmiConfigureNow = undefined;
      this._ipmiGateway = undefined;
      this._ipmiIp = undefined;
      this._ipmiMac = undefined;
      this._ipmiNetmask = undefined;
      this._ipmiPassword = undefined;
      this._ipmiUser = undefined;
      this._ipv6Address = undefined;
      this._ipv6Interface = undefined;
      this._mitigateLowBootSpace = undefined;
      this._nodePosition = undefined;
      this._nodeSerial = undefined;
      this._rdmaMacAddr = undefined;
      this._rdmaPassthrough = undefined;
      this._ucsmManagedMode = undefined;
      this._ucsmNodeSerial = undefined;
      this._ucsmParams.internalValue = undefined;
      this._vswitches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bondLacpRate = value.bondLacpRate;
      this._bondMode = value.bondMode;
      this._bondUplinks = value.bondUplinks;
      this._clusterId = value.clusterId;
      this._currentCvmVlanTag = value.currentCvmVlanTag;
      this._currentNetworkInterface = value.currentNetworkInterface;
      this._cvmGbRam = value.cvmGbRam;
      this._cvmIp = value.cvmIp;
      this._cvmNumVcpus = value.cvmNumVcpus;
      this._deviceHint = value.deviceHint;
      this._exludeBootSerial = value.exludeBootSerial;
      this._hypervisor = value.hypervisor;
      this._hypervisorHostname = value.hypervisorHostname;
      this._hypervisorIp = value.hypervisorIp;
      this._imageDelay = value.imageDelay;
      this._imageNow = value.imageNow;
      this._imageSuccessful = value.imageSuccessful;
      this._ipmiConfigureNow = value.ipmiConfigureNow;
      this._ipmiGateway = value.ipmiGateway;
      this._ipmiIp = value.ipmiIp;
      this._ipmiMac = value.ipmiMac;
      this._ipmiNetmask = value.ipmiNetmask;
      this._ipmiPassword = value.ipmiPassword;
      this._ipmiUser = value.ipmiUser;
      this._ipv6Address = value.ipv6Address;
      this._ipv6Interface = value.ipv6Interface;
      this._mitigateLowBootSpace = value.mitigateLowBootSpace;
      this._nodePosition = value.nodePosition;
      this._nodeSerial = value.nodeSerial;
      this._rdmaMacAddr = value.rdmaMacAddr;
      this._rdmaPassthrough = value.rdmaPassthrough;
      this._ucsmManagedMode = value.ucsmManagedMode;
      this._ucsmNodeSerial = value.ucsmNodeSerial;
      this._ucsmParams.internalValue = value.ucsmParams;
      this._vswitches.internalValue = value.vswitches;
    }
  }

  // bond_lacp_rate - computed: false, optional: true, required: false
  private _bondLacpRate?: string; 
  public get bondLacpRate() {
    return this.getStringAttribute('bond_lacp_rate');
  }
  public set bondLacpRate(value: string) {
    this._bondLacpRate = value;
  }
  public resetBondLacpRate() {
    this._bondLacpRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondLacpRateInput() {
    return this._bondLacpRate;
  }

  // bond_mode - computed: false, optional: true, required: false
  private _bondMode?: string; 
  public get bondMode() {
    return this.getStringAttribute('bond_mode');
  }
  public set bondMode(value: string) {
    this._bondMode = value;
  }
  public resetBondMode() {
    this._bondMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondModeInput() {
    return this._bondMode;
  }

  // bond_uplinks - computed: false, optional: true, required: false
  private _bondUplinks?: string[]; 
  public get bondUplinks() {
    return this.getListAttribute('bond_uplinks');
  }
  public set bondUplinks(value: string[]) {
    this._bondUplinks = value;
  }
  public resetBondUplinks() {
    this._bondUplinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondUplinksInput() {
    return this._bondUplinks;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // current_cvm_vlan_tag - computed: false, optional: true, required: false
  private _currentCvmVlanTag?: number; 
  public get currentCvmVlanTag() {
    return this.getNumberAttribute('current_cvm_vlan_tag');
  }
  public set currentCvmVlanTag(value: number) {
    this._currentCvmVlanTag = value;
  }
  public resetCurrentCvmVlanTag() {
    this._currentCvmVlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentCvmVlanTagInput() {
    return this._currentCvmVlanTag;
  }

  // current_network_interface - computed: false, optional: true, required: false
  private _currentNetworkInterface?: string; 
  public get currentNetworkInterface() {
    return this.getStringAttribute('current_network_interface');
  }
  public set currentNetworkInterface(value: string) {
    this._currentNetworkInterface = value;
  }
  public resetCurrentNetworkInterface() {
    this._currentNetworkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentNetworkInterfaceInput() {
    return this._currentNetworkInterface;
  }

  // cvm_gb_ram - computed: false, optional: true, required: false
  private _cvmGbRam?: number; 
  public get cvmGbRam() {
    return this.getNumberAttribute('cvm_gb_ram');
  }
  public set cvmGbRam(value: number) {
    this._cvmGbRam = value;
  }
  public resetCvmGbRam() {
    this._cvmGbRam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmGbRamInput() {
    return this._cvmGbRam;
  }

  // cvm_ip - computed: false, optional: true, required: false
  private _cvmIp?: string; 
  public get cvmIp() {
    return this.getStringAttribute('cvm_ip');
  }
  public set cvmIp(value: string) {
    this._cvmIp = value;
  }
  public resetCvmIp() {
    this._cvmIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmIpInput() {
    return this._cvmIp;
  }

  // cvm_num_vcpus - computed: false, optional: true, required: false
  private _cvmNumVcpus?: number; 
  public get cvmNumVcpus() {
    return this.getNumberAttribute('cvm_num_vcpus');
  }
  public set cvmNumVcpus(value: number) {
    this._cvmNumVcpus = value;
  }
  public resetCvmNumVcpus() {
    this._cvmNumVcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmNumVcpusInput() {
    return this._cvmNumVcpus;
  }

  // device_hint - computed: false, optional: true, required: false
  private _deviceHint?: string; 
  public get deviceHint() {
    return this.getStringAttribute('device_hint');
  }
  public set deviceHint(value: string) {
    this._deviceHint = value;
  }
  public resetDeviceHint() {
    this._deviceHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceHintInput() {
    return this._deviceHint;
  }

  // exlude_boot_serial - computed: false, optional: true, required: false
  private _exludeBootSerial?: string; 
  public get exludeBootSerial() {
    return this.getStringAttribute('exlude_boot_serial');
  }
  public set exludeBootSerial(value: string) {
    this._exludeBootSerial = value;
  }
  public resetExludeBootSerial() {
    this._exludeBootSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exludeBootSerialInput() {
    return this._exludeBootSerial;
  }

  // hypervisor - computed: false, optional: true, required: false
  private _hypervisor?: string; 
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }
  public set hypervisor(value: string) {
    this._hypervisor = value;
  }
  public resetHypervisor() {
    this._hypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor;
  }

  // hypervisor_hostname - computed: false, optional: false, required: true
  private _hypervisorHostname?: string; 
  public get hypervisorHostname() {
    return this.getStringAttribute('hypervisor_hostname');
  }
  public set hypervisorHostname(value: string) {
    this._hypervisorHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorHostnameInput() {
    return this._hypervisorHostname;
  }

  // hypervisor_ip - computed: false, optional: false, required: true
  private _hypervisorIp?: string; 
  public get hypervisorIp() {
    return this.getStringAttribute('hypervisor_ip');
  }
  public set hypervisorIp(value: string) {
    this._hypervisorIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorIpInput() {
    return this._hypervisorIp;
  }

  // image_delay - computed: false, optional: true, required: false
  private _imageDelay?: number; 
  public get imageDelay() {
    return this.getNumberAttribute('image_delay');
  }
  public set imageDelay(value: number) {
    this._imageDelay = value;
  }
  public resetImageDelay() {
    this._imageDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDelayInput() {
    return this._imageDelay;
  }

  // image_now - computed: false, optional: true, required: false
  private _imageNow?: boolean | cdktf.IResolvable; 
  public get imageNow() {
    return this.getBooleanAttribute('image_now');
  }
  public set imageNow(value: boolean | cdktf.IResolvable) {
    this._imageNow = value;
  }
  public resetImageNow() {
    this._imageNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNowInput() {
    return this._imageNow;
  }

  // image_successful - computed: false, optional: true, required: false
  private _imageSuccessful?: boolean | cdktf.IResolvable; 
  public get imageSuccessful() {
    return this.getBooleanAttribute('image_successful');
  }
  public set imageSuccessful(value: boolean | cdktf.IResolvable) {
    this._imageSuccessful = value;
  }
  public resetImageSuccessful() {
    this._imageSuccessful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSuccessfulInput() {
    return this._imageSuccessful;
  }

  // ipmi_configure_now - computed: false, optional: true, required: false
  private _ipmiConfigureNow?: boolean | cdktf.IResolvable; 
  public get ipmiConfigureNow() {
    return this.getBooleanAttribute('ipmi_configure_now');
  }
  public set ipmiConfigureNow(value: boolean | cdktf.IResolvable) {
    this._ipmiConfigureNow = value;
  }
  public resetIpmiConfigureNow() {
    this._ipmiConfigureNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiConfigureNowInput() {
    return this._ipmiConfigureNow;
  }

  // ipmi_gateway - computed: false, optional: true, required: false
  private _ipmiGateway?: string; 
  public get ipmiGateway() {
    return this.getStringAttribute('ipmi_gateway');
  }
  public set ipmiGateway(value: string) {
    this._ipmiGateway = value;
  }
  public resetIpmiGateway() {
    this._ipmiGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiGatewayInput() {
    return this._ipmiGateway;
  }

  // ipmi_ip - computed: false, optional: true, required: false
  private _ipmiIp?: string; 
  public get ipmiIp() {
    return this.getStringAttribute('ipmi_ip');
  }
  public set ipmiIp(value: string) {
    this._ipmiIp = value;
  }
  public resetIpmiIp() {
    this._ipmiIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiIpInput() {
    return this._ipmiIp;
  }

  // ipmi_mac - computed: false, optional: true, required: false
  private _ipmiMac?: string; 
  public get ipmiMac() {
    return this.getStringAttribute('ipmi_mac');
  }
  public set ipmiMac(value: string) {
    this._ipmiMac = value;
  }
  public resetIpmiMac() {
    this._ipmiMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiMacInput() {
    return this._ipmiMac;
  }

  // ipmi_netmask - computed: false, optional: true, required: false
  private _ipmiNetmask?: string; 
  public get ipmiNetmask() {
    return this.getStringAttribute('ipmi_netmask');
  }
  public set ipmiNetmask(value: string) {
    this._ipmiNetmask = value;
  }
  public resetIpmiNetmask() {
    this._ipmiNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiNetmaskInput() {
    return this._ipmiNetmask;
  }

  // ipmi_password - computed: false, optional: true, required: false
  private _ipmiPassword?: string; 
  public get ipmiPassword() {
    return this.getStringAttribute('ipmi_password');
  }
  public set ipmiPassword(value: string) {
    this._ipmiPassword = value;
  }
  public resetIpmiPassword() {
    this._ipmiPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiPasswordInput() {
    return this._ipmiPassword;
  }

  // ipmi_user - computed: false, optional: true, required: false
  private _ipmiUser?: string; 
  public get ipmiUser() {
    return this.getStringAttribute('ipmi_user');
  }
  public set ipmiUser(value: string) {
    this._ipmiUser = value;
  }
  public resetIpmiUser() {
    this._ipmiUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiUserInput() {
    return this._ipmiUser;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_interface - computed: false, optional: true, required: false
  private _ipv6Interface?: string; 
  public get ipv6Interface() {
    return this.getStringAttribute('ipv6_interface');
  }
  public set ipv6Interface(value: string) {
    this._ipv6Interface = value;
  }
  public resetIpv6Interface() {
    this._ipv6Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6InterfaceInput() {
    return this._ipv6Interface;
  }

  // mitigate_low_boot_space - computed: false, optional: true, required: false
  private _mitigateLowBootSpace?: boolean | cdktf.IResolvable; 
  public get mitigateLowBootSpace() {
    return this.getBooleanAttribute('mitigate_low_boot_space');
  }
  public set mitigateLowBootSpace(value: boolean | cdktf.IResolvable) {
    this._mitigateLowBootSpace = value;
  }
  public resetMitigateLowBootSpace() {
    this._mitigateLowBootSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigateLowBootSpaceInput() {
    return this._mitigateLowBootSpace;
  }

  // node_position - computed: false, optional: false, required: true
  private _nodePosition?: string; 
  public get nodePosition() {
    return this.getStringAttribute('node_position');
  }
  public set nodePosition(value: string) {
    this._nodePosition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePositionInput() {
    return this._nodePosition;
  }

  // node_serial - computed: false, optional: true, required: false
  private _nodeSerial?: string; 
  public get nodeSerial() {
    return this.getStringAttribute('node_serial');
  }
  public set nodeSerial(value: string) {
    this._nodeSerial = value;
  }
  public resetNodeSerial() {
    this._nodeSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSerialInput() {
    return this._nodeSerial;
  }

  // rdma_mac_addr - computed: false, optional: true, required: false
  private _rdmaMacAddr?: string; 
  public get rdmaMacAddr() {
    return this.getStringAttribute('rdma_mac_addr');
  }
  public set rdmaMacAddr(value: string) {
    this._rdmaMacAddr = value;
  }
  public resetRdmaMacAddr() {
    this._rdmaMacAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdmaMacAddrInput() {
    return this._rdmaMacAddr;
  }

  // rdma_passthrough - computed: false, optional: true, required: false
  private _rdmaPassthrough?: boolean | cdktf.IResolvable; 
  public get rdmaPassthrough() {
    return this.getBooleanAttribute('rdma_passthrough');
  }
  public set rdmaPassthrough(value: boolean | cdktf.IResolvable) {
    this._rdmaPassthrough = value;
  }
  public resetRdmaPassthrough() {
    this._rdmaPassthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdmaPassthroughInput() {
    return this._rdmaPassthrough;
  }

  // ucsm_managed_mode - computed: false, optional: true, required: false
  private _ucsmManagedMode?: string; 
  public get ucsmManagedMode() {
    return this.getStringAttribute('ucsm_managed_mode');
  }
  public set ucsmManagedMode(value: string) {
    this._ucsmManagedMode = value;
  }
  public resetUcsmManagedMode() {
    this._ucsmManagedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucsmManagedModeInput() {
    return this._ucsmManagedMode;
  }

  // ucsm_node_serial - computed: false, optional: true, required: false
  private _ucsmNodeSerial?: string; 
  public get ucsmNodeSerial() {
    return this.getStringAttribute('ucsm_node_serial');
  }
  public set ucsmNodeSerial(value: string) {
    this._ucsmNodeSerial = value;
  }
  public resetUcsmNodeSerial() {
    this._ucsmNodeSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucsmNodeSerialInput() {
    return this._ucsmNodeSerial;
  }

  // ucsm_params - computed: false, optional: true, required: false
  private _ucsmParams = new FoundationImageNodesBlocksNodesUcsmParamsOutputReference(this, "ucsm_params");
  public get ucsmParams() {
    return this._ucsmParams;
  }
  public putUcsmParams(value: FoundationImageNodesBlocksNodesUcsmParams) {
    this._ucsmParams.internalValue = value;
  }
  public resetUcsmParams() {
    this._ucsmParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucsmParamsInput() {
    return this._ucsmParams.internalValue;
  }

  // vswitches - computed: false, optional: true, required: false
  private _vswitches = new FoundationImageNodesBlocksNodesVswitchesList(this, "vswitches", false);
  public get vswitches() {
    return this._vswitches;
  }
  public putVswitches(value: FoundationImageNodesBlocksNodesVswitches[] | cdktf.IResolvable) {
    this._vswitches.internalValue = value;
  }
  public resetVswitches() {
    this._vswitches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchesInput() {
    return this._vswitches.internalValue;
  }
}

export class FoundationImageNodesBlocksNodesList extends cdktf.ComplexList {
  public internalValue? : FoundationImageNodesBlocksNodes[] | cdktf.IResolvable

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
  public get(index: number): FoundationImageNodesBlocksNodesOutputReference {
    return new FoundationImageNodesBlocksNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationImageNodesBlocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#block_id FoundationImageNodes#block_id}
  */
  readonly blockId?: string;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#nodes FoundationImageNodes#nodes}
  */
  readonly nodes: FoundationImageNodesBlocksNodes[] | cdktf.IResolvable;
}

export function foundationImageNodesBlocksToTerraform(struct?: FoundationImageNodesBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_id: cdktf.stringToTerraform(struct!.blockId),
    nodes: cdktf.listMapper(foundationImageNodesBlocksNodesToTerraform, true)(struct!.nodes),
  }
}


export function foundationImageNodesBlocksToHclTerraform(struct?: FoundationImageNodesBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_id: {
      value: cdktf.stringToHclTerraform(struct!.blockId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodes: {
      value: cdktf.listMapperHcl(foundationImageNodesBlocksNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "FoundationImageNodesBlocksNodesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationImageNodesBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockId = this._blockId;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockId = undefined;
      this._nodes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockId = value.blockId;
      this._nodes.internalValue = value.nodes;
    }
  }

  // block_id - computed: false, optional: true, required: false
  private _blockId?: string; 
  public get blockId() {
    return this.getStringAttribute('block_id');
  }
  public set blockId(value: string) {
    this._blockId = value;
  }
  public resetBlockId() {
    this._blockId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIdInput() {
    return this._blockId;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new FoundationImageNodesBlocksNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: FoundationImageNodesBlocksNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }
}

export class FoundationImageNodesBlocksList extends cdktf.ComplexList {
  public internalValue? : FoundationImageNodesBlocks[] | cdktf.IResolvable

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
  public get(index: number): FoundationImageNodesBlocksOutputReference {
    return new FoundationImageNodesBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationImageNodesClusters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#backplane_netmask FoundationImageNodes#backplane_netmask}
  */
  readonly backplaneNetmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#backplane_subnet FoundationImageNodes#backplane_subnet}
  */
  readonly backplaneSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#backplane_vlan FoundationImageNodes#backplane_vlan}
  */
  readonly backplaneVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#cluster_external_ip FoundationImageNodes#cluster_external_ip}
  */
  readonly clusterExternalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#cluster_init_now FoundationImageNodes#cluster_init_now}
  */
  readonly clusterInitNow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#cluster_init_successful FoundationImageNodes#cluster_init_successful}
  */
  readonly clusterInitSuccessful?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#cluster_members FoundationImageNodes#cluster_members}
  */
  readonly clusterMembers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#cluster_name FoundationImageNodes#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#cvm_dns_servers FoundationImageNodes#cvm_dns_servers}
  */
  readonly cvmDnsServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#cvm_ntp_servers FoundationImageNodes#cvm_ntp_servers}
  */
  readonly cvmNtpServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#enable_ns FoundationImageNodes#enable_ns}
  */
  readonly enableNs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hypervisor_ntp_servers FoundationImageNodes#hypervisor_ntp_servers}
  */
  readonly hypervisorNtpServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#redundancy_factor FoundationImageNodes#redundancy_factor}
  */
  readonly redundancyFactor: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#single_node_cluster FoundationImageNodes#single_node_cluster}
  */
  readonly singleNodeCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#timezone FoundationImageNodes#timezone}
  */
  readonly timezone?: string;
}

export function foundationImageNodesClustersToTerraform(struct?: FoundationImageNodesClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backplane_netmask: cdktf.stringToTerraform(struct!.backplaneNetmask),
    backplane_subnet: cdktf.stringToTerraform(struct!.backplaneSubnet),
    backplane_vlan: cdktf.stringToTerraform(struct!.backplaneVlan),
    cluster_external_ip: cdktf.stringToTerraform(struct!.clusterExternalIp),
    cluster_init_now: cdktf.booleanToTerraform(struct!.clusterInitNow),
    cluster_init_successful: cdktf.booleanToTerraform(struct!.clusterInitSuccessful),
    cluster_members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterMembers),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cvm_dns_servers: cdktf.stringToTerraform(struct!.cvmDnsServers),
    cvm_ntp_servers: cdktf.stringToTerraform(struct!.cvmNtpServers),
    enable_ns: cdktf.booleanToTerraform(struct!.enableNs),
    hypervisor_ntp_servers: cdktf.stringToTerraform(struct!.hypervisorNtpServers),
    redundancy_factor: cdktf.numberToTerraform(struct!.redundancyFactor),
    single_node_cluster: cdktf.booleanToTerraform(struct!.singleNodeCluster),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function foundationImageNodesClustersToHclTerraform(struct?: FoundationImageNodesClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backplane_netmask: {
      value: cdktf.stringToHclTerraform(struct!.backplaneNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backplane_subnet: {
      value: cdktf.stringToHclTerraform(struct!.backplaneSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backplane_vlan: {
      value: cdktf.stringToHclTerraform(struct!.backplaneVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_external_ip: {
      value: cdktf.stringToHclTerraform(struct!.clusterExternalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_init_now: {
      value: cdktf.booleanToHclTerraform(struct!.clusterInitNow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_init_successful: {
      value: cdktf.booleanToHclTerraform(struct!.clusterInitSuccessful),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterMembers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvm_dns_servers: {
      value: cdktf.stringToHclTerraform(struct!.cvmDnsServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvm_ntp_servers: {
      value: cdktf.stringToHclTerraform(struct!.cvmNtpServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ns: {
      value: cdktf.booleanToHclTerraform(struct!.enableNs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hypervisor_ntp_servers: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorNtpServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redundancy_factor: {
      value: cdktf.numberToHclTerraform(struct!.redundancyFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    single_node_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.singleNodeCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FoundationImageNodesClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backplaneNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.backplaneNetmask = this._backplaneNetmask;
    }
    if (this._backplaneSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.backplaneSubnet = this._backplaneSubnet;
    }
    if (this._backplaneVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.backplaneVlan = this._backplaneVlan;
    }
    if (this._clusterExternalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterExternalIp = this._clusterExternalIp;
    }
    if (this._clusterInitNow !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterInitNow = this._clusterInitNow;
    }
    if (this._clusterInitSuccessful !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterInitSuccessful = this._clusterInitSuccessful;
    }
    if (this._clusterMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMembers = this._clusterMembers;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._cvmDnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmDnsServers = this._cvmDnsServers;
    }
    if (this._cvmNtpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmNtpServers = this._cvmNtpServers;
    }
    if (this._enableNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNs = this._enableNs;
    }
    if (this._hypervisorNtpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorNtpServers = this._hypervisorNtpServers;
    }
    if (this._redundancyFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundancyFactor = this._redundancyFactor;
    }
    if (this._singleNodeCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleNodeCluster = this._singleNodeCluster;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backplaneNetmask = undefined;
      this._backplaneSubnet = undefined;
      this._backplaneVlan = undefined;
      this._clusterExternalIp = undefined;
      this._clusterInitNow = undefined;
      this._clusterInitSuccessful = undefined;
      this._clusterMembers = undefined;
      this._clusterName = undefined;
      this._cvmDnsServers = undefined;
      this._cvmNtpServers = undefined;
      this._enableNs = undefined;
      this._hypervisorNtpServers = undefined;
      this._redundancyFactor = undefined;
      this._singleNodeCluster = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backplaneNetmask = value.backplaneNetmask;
      this._backplaneSubnet = value.backplaneSubnet;
      this._backplaneVlan = value.backplaneVlan;
      this._clusterExternalIp = value.clusterExternalIp;
      this._clusterInitNow = value.clusterInitNow;
      this._clusterInitSuccessful = value.clusterInitSuccessful;
      this._clusterMembers = value.clusterMembers;
      this._clusterName = value.clusterName;
      this._cvmDnsServers = value.cvmDnsServers;
      this._cvmNtpServers = value.cvmNtpServers;
      this._enableNs = value.enableNs;
      this._hypervisorNtpServers = value.hypervisorNtpServers;
      this._redundancyFactor = value.redundancyFactor;
      this._singleNodeCluster = value.singleNodeCluster;
      this._timezone = value.timezone;
    }
  }

  // backplane_netmask - computed: false, optional: true, required: false
  private _backplaneNetmask?: string; 
  public get backplaneNetmask() {
    return this.getStringAttribute('backplane_netmask');
  }
  public set backplaneNetmask(value: string) {
    this._backplaneNetmask = value;
  }
  public resetBackplaneNetmask() {
    this._backplaneNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backplaneNetmaskInput() {
    return this._backplaneNetmask;
  }

  // backplane_subnet - computed: false, optional: true, required: false
  private _backplaneSubnet?: string; 
  public get backplaneSubnet() {
    return this.getStringAttribute('backplane_subnet');
  }
  public set backplaneSubnet(value: string) {
    this._backplaneSubnet = value;
  }
  public resetBackplaneSubnet() {
    this._backplaneSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backplaneSubnetInput() {
    return this._backplaneSubnet;
  }

  // backplane_vlan - computed: false, optional: true, required: false
  private _backplaneVlan?: string; 
  public get backplaneVlan() {
    return this.getStringAttribute('backplane_vlan');
  }
  public set backplaneVlan(value: string) {
    this._backplaneVlan = value;
  }
  public resetBackplaneVlan() {
    this._backplaneVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backplaneVlanInput() {
    return this._backplaneVlan;
  }

  // cluster_external_ip - computed: false, optional: true, required: false
  private _clusterExternalIp?: string; 
  public get clusterExternalIp() {
    return this.getStringAttribute('cluster_external_ip');
  }
  public set clusterExternalIp(value: string) {
    this._clusterExternalIp = value;
  }
  public resetClusterExternalIp() {
    this._clusterExternalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterExternalIpInput() {
    return this._clusterExternalIp;
  }

  // cluster_init_now - computed: false, optional: true, required: false
  private _clusterInitNow?: boolean | cdktf.IResolvable; 
  public get clusterInitNow() {
    return this.getBooleanAttribute('cluster_init_now');
  }
  public set clusterInitNow(value: boolean | cdktf.IResolvable) {
    this._clusterInitNow = value;
  }
  public resetClusterInitNow() {
    this._clusterInitNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInitNowInput() {
    return this._clusterInitNow;
  }

  // cluster_init_successful - computed: false, optional: true, required: false
  private _clusterInitSuccessful?: boolean | cdktf.IResolvable; 
  public get clusterInitSuccessful() {
    return this.getBooleanAttribute('cluster_init_successful');
  }
  public set clusterInitSuccessful(value: boolean | cdktf.IResolvable) {
    this._clusterInitSuccessful = value;
  }
  public resetClusterInitSuccessful() {
    this._clusterInitSuccessful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInitSuccessfulInput() {
    return this._clusterInitSuccessful;
  }

  // cluster_members - computed: false, optional: false, required: true
  private _clusterMembers?: string[]; 
  public get clusterMembers() {
    return this.getListAttribute('cluster_members');
  }
  public set clusterMembers(value: string[]) {
    this._clusterMembers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMembersInput() {
    return this._clusterMembers;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cvm_dns_servers - computed: false, optional: true, required: false
  private _cvmDnsServers?: string; 
  public get cvmDnsServers() {
    return this.getStringAttribute('cvm_dns_servers');
  }
  public set cvmDnsServers(value: string) {
    this._cvmDnsServers = value;
  }
  public resetCvmDnsServers() {
    this._cvmDnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmDnsServersInput() {
    return this._cvmDnsServers;
  }

  // cvm_ntp_servers - computed: false, optional: true, required: false
  private _cvmNtpServers?: string; 
  public get cvmNtpServers() {
    return this.getStringAttribute('cvm_ntp_servers');
  }
  public set cvmNtpServers(value: string) {
    this._cvmNtpServers = value;
  }
  public resetCvmNtpServers() {
    this._cvmNtpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmNtpServersInput() {
    return this._cvmNtpServers;
  }

  // enable_ns - computed: false, optional: true, required: false
  private _enableNs?: boolean | cdktf.IResolvable; 
  public get enableNs() {
    return this.getBooleanAttribute('enable_ns');
  }
  public set enableNs(value: boolean | cdktf.IResolvable) {
    this._enableNs = value;
  }
  public resetEnableNs() {
    this._enableNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNsInput() {
    return this._enableNs;
  }

  // hypervisor_ntp_servers - computed: false, optional: true, required: false
  private _hypervisorNtpServers?: string; 
  public get hypervisorNtpServers() {
    return this.getStringAttribute('hypervisor_ntp_servers');
  }
  public set hypervisorNtpServers(value: string) {
    this._hypervisorNtpServers = value;
  }
  public resetHypervisorNtpServers() {
    this._hypervisorNtpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorNtpServersInput() {
    return this._hypervisorNtpServers;
  }

  // redundancy_factor - computed: false, optional: false, required: true
  private _redundancyFactor?: number; 
  public get redundancyFactor() {
    return this.getNumberAttribute('redundancy_factor');
  }
  public set redundancyFactor(value: number) {
    this._redundancyFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyFactorInput() {
    return this._redundancyFactor;
  }

  // single_node_cluster - computed: false, optional: true, required: false
  private _singleNodeCluster?: boolean | cdktf.IResolvable; 
  public get singleNodeCluster() {
    return this.getBooleanAttribute('single_node_cluster');
  }
  public set singleNodeCluster(value: boolean | cdktf.IResolvable) {
    this._singleNodeCluster = value;
  }
  public resetSingleNodeCluster() {
    this._singleNodeCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleNodeClusterInput() {
    return this._singleNodeCluster;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

export class FoundationImageNodesClustersList extends cdktf.ComplexList {
  public internalValue? : FoundationImageNodesClusters[] | cdktf.IResolvable

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
  public get(index: number): FoundationImageNodesClustersOutputReference {
    return new FoundationImageNodesClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FoundationImageNodesEosMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#account_name FoundationImageNodes#account_name}
  */
  readonly accountName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#config_id FoundationImageNodes#config_id}
  */
  readonly configId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#email FoundationImageNodes#email}
  */
  readonly email?: string;
}

export function foundationImageNodesEosMetadataToTerraform(struct?: FoundationImageNodesEosMetadataOutputReference | FoundationImageNodesEosMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountName),
    config_id: cdktf.stringToTerraform(struct!.configId),
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function foundationImageNodesEosMetadataToHclTerraform(struct?: FoundationImageNodesEosMetadataOutputReference | FoundationImageNodesEosMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accountName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    config_id: {
      value: cdktf.stringToHclTerraform(struct!.configId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesEosMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationImageNodesEosMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._configId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configId = this._configId;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesEosMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._configId = undefined;
      this._email = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._configId = value.configId;
      this._email = value.email;
    }
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string[]; 
  public get accountName() {
    return this.getListAttribute('account_name');
  }
  public set accountName(value: string[]) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // config_id - computed: false, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}
export interface FoundationImageNodesFcSettingsFcMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#api_key FoundationImageNodes#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#fc_ip FoundationImageNodes#fc_ip}
  */
  readonly fcIp: string;
}

export function foundationImageNodesFcSettingsFcMetadataToTerraform(struct?: FoundationImageNodesFcSettingsFcMetadataOutputReference | FoundationImageNodesFcSettingsFcMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    fc_ip: cdktf.stringToTerraform(struct!.fcIp),
  }
}


export function foundationImageNodesFcSettingsFcMetadataToHclTerraform(struct?: FoundationImageNodesFcSettingsFcMetadataOutputReference | FoundationImageNodesFcSettingsFcMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fc_ip: {
      value: cdktf.stringToHclTerraform(struct!.fcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesFcSettingsFcMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationImageNodesFcSettingsFcMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._fcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fcIp = this._fcIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesFcSettingsFcMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._fcIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._fcIp = value.fcIp;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // fc_ip - computed: false, optional: false, required: true
  private _fcIp?: string; 
  public get fcIp() {
    return this.getStringAttribute('fc_ip');
  }
  public set fcIp(value: string) {
    this._fcIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fcIpInput() {
    return this._fcIp;
  }
}
export interface FoundationImageNodesFcSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#foundation_central FoundationImageNodes#foundation_central}
  */
  readonly foundationCentral: boolean | cdktf.IResolvable;
  /**
  * fc_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#fc_metadata FoundationImageNodes#fc_metadata}
  */
  readonly fcMetadata: FoundationImageNodesFcSettingsFcMetadata;
}

export function foundationImageNodesFcSettingsToTerraform(struct?: FoundationImageNodesFcSettingsOutputReference | FoundationImageNodesFcSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    foundation_central: cdktf.booleanToTerraform(struct!.foundationCentral),
    fc_metadata: foundationImageNodesFcSettingsFcMetadataToTerraform(struct!.fcMetadata),
  }
}


export function foundationImageNodesFcSettingsToHclTerraform(struct?: FoundationImageNodesFcSettingsOutputReference | FoundationImageNodesFcSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    foundation_central: {
      value: cdktf.booleanToHclTerraform(struct!.foundationCentral),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fc_metadata: {
      value: foundationImageNodesFcSettingsFcMetadataToHclTerraform(struct!.fcMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "FoundationImageNodesFcSettingsFcMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesFcSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationImageNodesFcSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._foundationCentral !== undefined) {
      hasAnyValues = true;
      internalValueResult.foundationCentral = this._foundationCentral;
    }
    if (this._fcMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fcMetadata = this._fcMetadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesFcSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._foundationCentral = undefined;
      this._fcMetadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._foundationCentral = value.foundationCentral;
      this._fcMetadata.internalValue = value.fcMetadata;
    }
  }

  // foundation_central - computed: false, optional: false, required: true
  private _foundationCentral?: boolean | cdktf.IResolvable; 
  public get foundationCentral() {
    return this.getBooleanAttribute('foundation_central');
  }
  public set foundationCentral(value: boolean | cdktf.IResolvable) {
    this._foundationCentral = value;
  }
  // Temporarily expose input value. Use with caution.
  public get foundationCentralInput() {
    return this._foundationCentral;
  }

  // fc_metadata - computed: false, optional: false, required: true
  private _fcMetadata = new FoundationImageNodesFcSettingsFcMetadataOutputReference(this, "fc_metadata");
  public get fcMetadata() {
    return this._fcMetadata;
  }
  public putFcMetadata(value: FoundationImageNodesFcSettingsFcMetadata) {
    this._fcMetadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fcMetadataInput() {
    return this._fcMetadata.internalValue;
  }
}
export interface FoundationImageNodesHypervisorIsoEsx {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#checksum FoundationImageNodes#checksum}
  */
  readonly checksum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#filename FoundationImageNodes#filename}
  */
  readonly filename: string;
}

export function foundationImageNodesHypervisorIsoEsxToTerraform(struct?: FoundationImageNodesHypervisorIsoEsxOutputReference | FoundationImageNodesHypervisorIsoEsx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum: cdktf.stringToTerraform(struct!.checksum),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}


export function foundationImageNodesHypervisorIsoEsxToHclTerraform(struct?: FoundationImageNodesHypervisorIsoEsxOutputReference | FoundationImageNodesHypervisorIsoEsx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesHypervisorIsoEsxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationImageNodesHypervisorIsoEsx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesHypervisorIsoEsx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checksum = undefined;
      this._filename = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checksum = value.checksum;
      this._filename = value.filename;
    }
  }

  // checksum - computed: false, optional: false, required: true
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface FoundationImageNodesHypervisorIsoHyperv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#checksum FoundationImageNodes#checksum}
  */
  readonly checksum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#filename FoundationImageNodes#filename}
  */
  readonly filename: string;
}

export function foundationImageNodesHypervisorIsoHypervToTerraform(struct?: FoundationImageNodesHypervisorIsoHypervOutputReference | FoundationImageNodesHypervisorIsoHyperv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum: cdktf.stringToTerraform(struct!.checksum),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}


export function foundationImageNodesHypervisorIsoHypervToHclTerraform(struct?: FoundationImageNodesHypervisorIsoHypervOutputReference | FoundationImageNodesHypervisorIsoHyperv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesHypervisorIsoHypervOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationImageNodesHypervisorIsoHyperv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesHypervisorIsoHyperv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checksum = undefined;
      this._filename = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checksum = value.checksum;
      this._filename = value.filename;
    }
  }

  // checksum - computed: false, optional: false, required: true
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface FoundationImageNodesHypervisorIsoKvm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#checksum FoundationImageNodes#checksum}
  */
  readonly checksum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#filename FoundationImageNodes#filename}
  */
  readonly filename: string;
}

export function foundationImageNodesHypervisorIsoKvmToTerraform(struct?: FoundationImageNodesHypervisorIsoKvmOutputReference | FoundationImageNodesHypervisorIsoKvm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum: cdktf.stringToTerraform(struct!.checksum),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}


export function foundationImageNodesHypervisorIsoKvmToHclTerraform(struct?: FoundationImageNodesHypervisorIsoKvmOutputReference | FoundationImageNodesHypervisorIsoKvm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesHypervisorIsoKvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationImageNodesHypervisorIsoKvm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesHypervisorIsoKvm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checksum = undefined;
      this._filename = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checksum = value.checksum;
      this._filename = value.filename;
    }
  }

  // checksum - computed: false, optional: false, required: true
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface FoundationImageNodesHypervisorIsoXen {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#checksum FoundationImageNodes#checksum}
  */
  readonly checksum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#filename FoundationImageNodes#filename}
  */
  readonly filename: string;
}

export function foundationImageNodesHypervisorIsoXenToTerraform(struct?: FoundationImageNodesHypervisorIsoXenOutputReference | FoundationImageNodesHypervisorIsoXen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum: cdktf.stringToTerraform(struct!.checksum),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}


export function foundationImageNodesHypervisorIsoXenToHclTerraform(struct?: FoundationImageNodesHypervisorIsoXenOutputReference | FoundationImageNodesHypervisorIsoXen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesHypervisorIsoXenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationImageNodesHypervisorIsoXen | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesHypervisorIsoXen | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checksum = undefined;
      this._filename = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checksum = value.checksum;
      this._filename = value.filename;
    }
  }

  // checksum - computed: false, optional: false, required: true
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface FoundationImageNodesHypervisorIso {
  /**
  * esx block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#esx FoundationImageNodes#esx}
  */
  readonly esx?: FoundationImageNodesHypervisorIsoEsx;
  /**
  * hyperv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#hyperv FoundationImageNodes#hyperv}
  */
  readonly hyperv?: FoundationImageNodesHypervisorIsoHyperv;
  /**
  * kvm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#kvm FoundationImageNodes#kvm}
  */
  readonly kvm?: FoundationImageNodesHypervisorIsoKvm;
  /**
  * xen block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#xen FoundationImageNodes#xen}
  */
  readonly xen?: FoundationImageNodesHypervisorIsoXen;
}

export function foundationImageNodesHypervisorIsoToTerraform(struct?: FoundationImageNodesHypervisorIsoOutputReference | FoundationImageNodesHypervisorIso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    esx: foundationImageNodesHypervisorIsoEsxToTerraform(struct!.esx),
    hyperv: foundationImageNodesHypervisorIsoHypervToTerraform(struct!.hyperv),
    kvm: foundationImageNodesHypervisorIsoKvmToTerraform(struct!.kvm),
    xen: foundationImageNodesHypervisorIsoXenToTerraform(struct!.xen),
  }
}


export function foundationImageNodesHypervisorIsoToHclTerraform(struct?: FoundationImageNodesHypervisorIsoOutputReference | FoundationImageNodesHypervisorIso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    esx: {
      value: foundationImageNodesHypervisorIsoEsxToHclTerraform(struct!.esx),
      isBlock: true,
      type: "list",
      storageClassType: "FoundationImageNodesHypervisorIsoEsxList",
    },
    hyperv: {
      value: foundationImageNodesHypervisorIsoHypervToHclTerraform(struct!.hyperv),
      isBlock: true,
      type: "list",
      storageClassType: "FoundationImageNodesHypervisorIsoHypervList",
    },
    kvm: {
      value: foundationImageNodesHypervisorIsoKvmToHclTerraform(struct!.kvm),
      isBlock: true,
      type: "list",
      storageClassType: "FoundationImageNodesHypervisorIsoKvmList",
    },
    xen: {
      value: foundationImageNodesHypervisorIsoXenToHclTerraform(struct!.xen),
      isBlock: true,
      type: "list",
      storageClassType: "FoundationImageNodesHypervisorIsoXenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesHypervisorIsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationImageNodesHypervisorIso | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._esx?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.esx = this._esx?.internalValue;
    }
    if (this._hyperv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperv = this._hyperv?.internalValue;
    }
    if (this._kvm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kvm = this._kvm?.internalValue;
    }
    if (this._xen?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xen = this._xen?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesHypervisorIso | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._esx.internalValue = undefined;
      this._hyperv.internalValue = undefined;
      this._kvm.internalValue = undefined;
      this._xen.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._esx.internalValue = value.esx;
      this._hyperv.internalValue = value.hyperv;
      this._kvm.internalValue = value.kvm;
      this._xen.internalValue = value.xen;
    }
  }

  // esx - computed: false, optional: true, required: false
  private _esx = new FoundationImageNodesHypervisorIsoEsxOutputReference(this, "esx");
  public get esx() {
    return this._esx;
  }
  public putEsx(value: FoundationImageNodesHypervisorIsoEsx) {
    this._esx.internalValue = value;
  }
  public resetEsx() {
    this._esx.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esxInput() {
    return this._esx.internalValue;
  }

  // hyperv - computed: false, optional: true, required: false
  private _hyperv = new FoundationImageNodesHypervisorIsoHypervOutputReference(this, "hyperv");
  public get hyperv() {
    return this._hyperv;
  }
  public putHyperv(value: FoundationImageNodesHypervisorIsoHyperv) {
    this._hyperv.internalValue = value;
  }
  public resetHyperv() {
    this._hyperv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervInput() {
    return this._hyperv.internalValue;
  }

  // kvm - computed: false, optional: true, required: false
  private _kvm = new FoundationImageNodesHypervisorIsoKvmOutputReference(this, "kvm");
  public get kvm() {
    return this._kvm;
  }
  public putKvm(value: FoundationImageNodesHypervisorIsoKvm) {
    this._kvm.internalValue = value;
  }
  public resetKvm() {
    this._kvm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvmInput() {
    return this._kvm.internalValue;
  }

  // xen - computed: false, optional: true, required: false
  private _xen = new FoundationImageNodesHypervisorIsoXenOutputReference(this, "xen");
  public get xen() {
    return this._xen;
  }
  public putXen(value: FoundationImageNodesHypervisorIsoXen) {
    this._xen.internalValue = value;
  }
  public resetXen() {
    this._xen.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xenInput() {
    return this._xen.internalValue;
  }
}
export interface FoundationImageNodesTests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#run_ncc FoundationImageNodes#run_ncc}
  */
  readonly runNcc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#run_syscheck FoundationImageNodes#run_syscheck}
  */
  readonly runSyscheck?: boolean | cdktf.IResolvable;
}

export function foundationImageNodesTestsToTerraform(struct?: FoundationImageNodesTestsOutputReference | FoundationImageNodesTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    run_ncc: cdktf.booleanToTerraform(struct!.runNcc),
    run_syscheck: cdktf.booleanToTerraform(struct!.runSyscheck),
  }
}


export function foundationImageNodesTestsToHclTerraform(struct?: FoundationImageNodesTestsOutputReference | FoundationImageNodesTests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    run_ncc: {
      value: cdktf.booleanToHclTerraform(struct!.runNcc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_syscheck: {
      value: cdktf.booleanToHclTerraform(struct!.runSyscheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesTestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FoundationImageNodesTests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runNcc !== undefined) {
      hasAnyValues = true;
      internalValueResult.runNcc = this._runNcc;
    }
    if (this._runSyscheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.runSyscheck = this._runSyscheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesTests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._runNcc = undefined;
      this._runSyscheck = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._runNcc = value.runNcc;
      this._runSyscheck = value.runSyscheck;
    }
  }

  // run_ncc - computed: false, optional: true, required: false
  private _runNcc?: boolean | cdktf.IResolvable; 
  public get runNcc() {
    return this.getBooleanAttribute('run_ncc');
  }
  public set runNcc(value: boolean | cdktf.IResolvable) {
    this._runNcc = value;
  }
  public resetRunNcc() {
    this._runNcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runNccInput() {
    return this._runNcc;
  }

  // run_syscheck - computed: false, optional: true, required: false
  private _runSyscheck?: boolean | cdktf.IResolvable; 
  public get runSyscheck() {
    return this.getBooleanAttribute('run_syscheck');
  }
  public set runSyscheck(value: boolean | cdktf.IResolvable) {
    this._runSyscheck = value;
  }
  public resetRunSyscheck() {
    this._runSyscheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runSyscheckInput() {
    return this._runSyscheck;
  }
}
export interface FoundationImageNodesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#create FoundationImageNodes#create}
  */
  readonly create?: string;
}

export function foundationImageNodesTimeoutsToTerraform(struct?: FoundationImageNodesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function foundationImageNodesTimeoutsToHclTerraform(struct?: FoundationImageNodesTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FoundationImageNodesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FoundationImageNodesTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FoundationImageNodesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes nutanix_foundation_image_nodes}
*/
export class FoundationImageNodes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_foundation_image_nodes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FoundationImageNodes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FoundationImageNodes to import
  * @param importFromId The id of the existing FoundationImageNodes that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FoundationImageNodes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_foundation_image_nodes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/foundation_image_nodes nutanix_foundation_image_nodes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FoundationImageNodesConfig
  */
  public constructor(scope: Construct, id: string, config: FoundationImageNodesConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_foundation_image_nodes',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cvmGateway = config.cvmGateway;
    this._cvmNetmask = config.cvmNetmask;
    this._hypervExternalVnic = config.hypervExternalVnic;
    this._hypervExternalVswitch = config.hypervExternalVswitch;
    this._hypervProductKey = config.hypervProductKey;
    this._hypervSku = config.hypervSku;
    this._hypervisorGateway = config.hypervisorGateway;
    this._hypervisorNameserver = config.hypervisorNameserver;
    this._hypervisorNetmask = config.hypervisorNetmask;
    this._hypervisorPassword = config.hypervisorPassword;
    this._id = config.id;
    this._installScript = config.installScript;
    this._ipmiGateway = config.ipmiGateway;
    this._ipmiNetmask = config.ipmiNetmask;
    this._ipmiPassword = config.ipmiPassword;
    this._ipmiUser = config.ipmiUser;
    this._layoutEggUuid = config.layoutEggUuid;
    this._nosPackage = config.nosPackage;
    this._skipHypervisor = config.skipHypervisor;
    this._svmRescueArgs = config.svmRescueArgs;
    this._ucsmIp = config.ucsmIp;
    this._ucsmPassword = config.ucsmPassword;
    this._ucsmUser = config.ucsmUser;
    this._uncPassword = config.uncPassword;
    this._uncPath = config.uncPath;
    this._uncUsername = config.uncUsername;
    this._xenConfigType = config.xenConfigType;
    this._xsMasterIp = config.xsMasterIp;
    this._xsMasterLabel = config.xsMasterLabel;
    this._xsMasterPassword = config.xsMasterPassword;
    this._xsMasterUsername = config.xsMasterUsername;
    this._blocks.internalValue = config.blocks;
    this._clusters.internalValue = config.clusters;
    this._eosMetadata.internalValue = config.eosMetadata;
    this._fcSettings.internalValue = config.fcSettings;
    this._hypervisorIso.internalValue = config.hypervisorIso;
    this._tests.internalValue = config.tests;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_urls - computed: true, optional: false, required: false
  private _clusterUrls = new FoundationImageNodesClusterUrlsList(this, "cluster_urls", false);
  public get clusterUrls() {
    return this._clusterUrls;
  }

  // cvm_gateway - computed: false, optional: false, required: true
  private _cvmGateway?: string; 
  public get cvmGateway() {
    return this.getStringAttribute('cvm_gateway');
  }
  public set cvmGateway(value: string) {
    this._cvmGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmGatewayInput() {
    return this._cvmGateway;
  }

  // cvm_netmask - computed: false, optional: false, required: true
  private _cvmNetmask?: string; 
  public get cvmNetmask() {
    return this.getStringAttribute('cvm_netmask');
  }
  public set cvmNetmask(value: string) {
    this._cvmNetmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmNetmaskInput() {
    return this._cvmNetmask;
  }

  // hyperv_external_vnic - computed: false, optional: true, required: false
  private _hypervExternalVnic?: string; 
  public get hypervExternalVnic() {
    return this.getStringAttribute('hyperv_external_vnic');
  }
  public set hypervExternalVnic(value: string) {
    this._hypervExternalVnic = value;
  }
  public resetHypervExternalVnic() {
    this._hypervExternalVnic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervExternalVnicInput() {
    return this._hypervExternalVnic;
  }

  // hyperv_external_vswitch - computed: false, optional: true, required: false
  private _hypervExternalVswitch?: string; 
  public get hypervExternalVswitch() {
    return this.getStringAttribute('hyperv_external_vswitch');
  }
  public set hypervExternalVswitch(value: string) {
    this._hypervExternalVswitch = value;
  }
  public resetHypervExternalVswitch() {
    this._hypervExternalVswitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervExternalVswitchInput() {
    return this._hypervExternalVswitch;
  }

  // hyperv_product_key - computed: false, optional: true, required: false
  private _hypervProductKey?: string; 
  public get hypervProductKey() {
    return this.getStringAttribute('hyperv_product_key');
  }
  public set hypervProductKey(value: string) {
    this._hypervProductKey = value;
  }
  public resetHypervProductKey() {
    this._hypervProductKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervProductKeyInput() {
    return this._hypervProductKey;
  }

  // hyperv_sku - computed: false, optional: true, required: false
  private _hypervSku?: boolean | cdktf.IResolvable; 
  public get hypervSku() {
    return this.getBooleanAttribute('hyperv_sku');
  }
  public set hypervSku(value: boolean | cdktf.IResolvable) {
    this._hypervSku = value;
  }
  public resetHypervSku() {
    this._hypervSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervSkuInput() {
    return this._hypervSku;
  }

  // hypervisor_gateway - computed: false, optional: false, required: true
  private _hypervisorGateway?: string; 
  public get hypervisorGateway() {
    return this.getStringAttribute('hypervisor_gateway');
  }
  public set hypervisorGateway(value: string) {
    this._hypervisorGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorGatewayInput() {
    return this._hypervisorGateway;
  }

  // hypervisor_nameserver - computed: false, optional: true, required: false
  private _hypervisorNameserver?: string; 
  public get hypervisorNameserver() {
    return this.getStringAttribute('hypervisor_nameserver');
  }
  public set hypervisorNameserver(value: string) {
    this._hypervisorNameserver = value;
  }
  public resetHypervisorNameserver() {
    this._hypervisorNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorNameserverInput() {
    return this._hypervisorNameserver;
  }

  // hypervisor_netmask - computed: false, optional: false, required: true
  private _hypervisorNetmask?: string; 
  public get hypervisorNetmask() {
    return this.getStringAttribute('hypervisor_netmask');
  }
  public set hypervisorNetmask(value: string) {
    this._hypervisorNetmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorNetmaskInput() {
    return this._hypervisorNetmask;
  }

  // hypervisor_password - computed: false, optional: true, required: false
  private _hypervisorPassword?: string; 
  public get hypervisorPassword() {
    return this.getStringAttribute('hypervisor_password');
  }
  public set hypervisorPassword(value: string) {
    this._hypervisorPassword = value;
  }
  public resetHypervisorPassword() {
    this._hypervisorPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorPasswordInput() {
    return this._hypervisorPassword;
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

  // install_script - computed: false, optional: true, required: false
  private _installScript?: string; 
  public get installScript() {
    return this.getStringAttribute('install_script');
  }
  public set installScript(value: string) {
    this._installScript = value;
  }
  public resetInstallScript() {
    this._installScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installScriptInput() {
    return this._installScript;
  }

  // ipmi_gateway - computed: false, optional: true, required: false
  private _ipmiGateway?: string; 
  public get ipmiGateway() {
    return this.getStringAttribute('ipmi_gateway');
  }
  public set ipmiGateway(value: string) {
    this._ipmiGateway = value;
  }
  public resetIpmiGateway() {
    this._ipmiGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiGatewayInput() {
    return this._ipmiGateway;
  }

  // ipmi_netmask - computed: false, optional: true, required: false
  private _ipmiNetmask?: string; 
  public get ipmiNetmask() {
    return this.getStringAttribute('ipmi_netmask');
  }
  public set ipmiNetmask(value: string) {
    this._ipmiNetmask = value;
  }
  public resetIpmiNetmask() {
    this._ipmiNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiNetmaskInput() {
    return this._ipmiNetmask;
  }

  // ipmi_password - computed: false, optional: true, required: false
  private _ipmiPassword?: string; 
  public get ipmiPassword() {
    return this.getStringAttribute('ipmi_password');
  }
  public set ipmiPassword(value: string) {
    this._ipmiPassword = value;
  }
  public resetIpmiPassword() {
    this._ipmiPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiPasswordInput() {
    return this._ipmiPassword;
  }

  // ipmi_user - computed: false, optional: true, required: false
  private _ipmiUser?: string; 
  public get ipmiUser() {
    return this.getStringAttribute('ipmi_user');
  }
  public set ipmiUser(value: string) {
    this._ipmiUser = value;
  }
  public resetIpmiUser() {
    this._ipmiUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiUserInput() {
    return this._ipmiUser;
  }

  // layout_egg_uuid - computed: false, optional: true, required: false
  private _layoutEggUuid?: string; 
  public get layoutEggUuid() {
    return this.getStringAttribute('layout_egg_uuid');
  }
  public set layoutEggUuid(value: string) {
    this._layoutEggUuid = value;
  }
  public resetLayoutEggUuid() {
    this._layoutEggUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutEggUuidInput() {
    return this._layoutEggUuid;
  }

  // nos_package - computed: false, optional: false, required: true
  private _nosPackage?: string; 
  public get nosPackage() {
    return this.getStringAttribute('nos_package');
  }
  public set nosPackage(value: string) {
    this._nosPackage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nosPackageInput() {
    return this._nosPackage;
  }

  // session_id - computed: true, optional: false, required: false
  public get sessionId() {
    return this.getStringAttribute('session_id');
  }

  // skip_hypervisor - computed: false, optional: true, required: false
  private _skipHypervisor?: boolean | cdktf.IResolvable; 
  public get skipHypervisor() {
    return this.getBooleanAttribute('skip_hypervisor');
  }
  public set skipHypervisor(value: boolean | cdktf.IResolvable) {
    this._skipHypervisor = value;
  }
  public resetSkipHypervisor() {
    this._skipHypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipHypervisorInput() {
    return this._skipHypervisor;
  }

  // svm_rescue_args - computed: false, optional: true, required: false
  private _svmRescueArgs?: string[]; 
  public get svmRescueArgs() {
    return this.getListAttribute('svm_rescue_args');
  }
  public set svmRescueArgs(value: string[]) {
    this._svmRescueArgs = value;
  }
  public resetSvmRescueArgs() {
    this._svmRescueArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmRescueArgsInput() {
    return this._svmRescueArgs;
  }

  // ucsm_ip - computed: false, optional: true, required: false
  private _ucsmIp?: string; 
  public get ucsmIp() {
    return this.getStringAttribute('ucsm_ip');
  }
  public set ucsmIp(value: string) {
    this._ucsmIp = value;
  }
  public resetUcsmIp() {
    this._ucsmIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucsmIpInput() {
    return this._ucsmIp;
  }

  // ucsm_password - computed: false, optional: true, required: false
  private _ucsmPassword?: string; 
  public get ucsmPassword() {
    return this.getStringAttribute('ucsm_password');
  }
  public set ucsmPassword(value: string) {
    this._ucsmPassword = value;
  }
  public resetUcsmPassword() {
    this._ucsmPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucsmPasswordInput() {
    return this._ucsmPassword;
  }

  // ucsm_user - computed: false, optional: true, required: false
  private _ucsmUser?: string; 
  public get ucsmUser() {
    return this.getStringAttribute('ucsm_user');
  }
  public set ucsmUser(value: string) {
    this._ucsmUser = value;
  }
  public resetUcsmUser() {
    this._ucsmUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucsmUserInput() {
    return this._ucsmUser;
  }

  // unc_password - computed: false, optional: true, required: false
  private _uncPassword?: string; 
  public get uncPassword() {
    return this.getStringAttribute('unc_password');
  }
  public set uncPassword(value: string) {
    this._uncPassword = value;
  }
  public resetUncPassword() {
    this._uncPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncPasswordInput() {
    return this._uncPassword;
  }

  // unc_path - computed: false, optional: true, required: false
  private _uncPath?: string; 
  public get uncPath() {
    return this.getStringAttribute('unc_path');
  }
  public set uncPath(value: string) {
    this._uncPath = value;
  }
  public resetUncPath() {
    this._uncPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncPathInput() {
    return this._uncPath;
  }

  // unc_username - computed: false, optional: true, required: false
  private _uncUsername?: string; 
  public get uncUsername() {
    return this.getStringAttribute('unc_username');
  }
  public set uncUsername(value: string) {
    this._uncUsername = value;
  }
  public resetUncUsername() {
    this._uncUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncUsernameInput() {
    return this._uncUsername;
  }

  // xen_config_type - computed: false, optional: true, required: false
  private _xenConfigType?: string; 
  public get xenConfigType() {
    return this.getStringAttribute('xen_config_type');
  }
  public set xenConfigType(value: string) {
    this._xenConfigType = value;
  }
  public resetXenConfigType() {
    this._xenConfigType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xenConfigTypeInput() {
    return this._xenConfigType;
  }

  // xs_master_ip - computed: false, optional: true, required: false
  private _xsMasterIp?: string; 
  public get xsMasterIp() {
    return this.getStringAttribute('xs_master_ip');
  }
  public set xsMasterIp(value: string) {
    this._xsMasterIp = value;
  }
  public resetXsMasterIp() {
    this._xsMasterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsMasterIpInput() {
    return this._xsMasterIp;
  }

  // xs_master_label - computed: false, optional: true, required: false
  private _xsMasterLabel?: string; 
  public get xsMasterLabel() {
    return this.getStringAttribute('xs_master_label');
  }
  public set xsMasterLabel(value: string) {
    this._xsMasterLabel = value;
  }
  public resetXsMasterLabel() {
    this._xsMasterLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsMasterLabelInput() {
    return this._xsMasterLabel;
  }

  // xs_master_password - computed: false, optional: true, required: false
  private _xsMasterPassword?: string; 
  public get xsMasterPassword() {
    return this.getStringAttribute('xs_master_password');
  }
  public set xsMasterPassword(value: string) {
    this._xsMasterPassword = value;
  }
  public resetXsMasterPassword() {
    this._xsMasterPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsMasterPasswordInput() {
    return this._xsMasterPassword;
  }

  // xs_master_username - computed: false, optional: true, required: false
  private _xsMasterUsername?: string; 
  public get xsMasterUsername() {
    return this.getStringAttribute('xs_master_username');
  }
  public set xsMasterUsername(value: string) {
    this._xsMasterUsername = value;
  }
  public resetXsMasterUsername() {
    this._xsMasterUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsMasterUsernameInput() {
    return this._xsMasterUsername;
  }

  // blocks - computed: false, optional: false, required: true
  private _blocks = new FoundationImageNodesBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }
  public putBlocks(value: FoundationImageNodesBlocks[] | cdktf.IResolvable) {
    this._blocks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks.internalValue;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new FoundationImageNodesClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: FoundationImageNodesClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // eos_metadata - computed: false, optional: true, required: false
  private _eosMetadata = new FoundationImageNodesEosMetadataOutputReference(this, "eos_metadata");
  public get eosMetadata() {
    return this._eosMetadata;
  }
  public putEosMetadata(value: FoundationImageNodesEosMetadata) {
    this._eosMetadata.internalValue = value;
  }
  public resetEosMetadata() {
    this._eosMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eosMetadataInput() {
    return this._eosMetadata.internalValue;
  }

  // fc_settings - computed: false, optional: true, required: false
  private _fcSettings = new FoundationImageNodesFcSettingsOutputReference(this, "fc_settings");
  public get fcSettings() {
    return this._fcSettings;
  }
  public putFcSettings(value: FoundationImageNodesFcSettings) {
    this._fcSettings.internalValue = value;
  }
  public resetFcSettings() {
    this._fcSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcSettingsInput() {
    return this._fcSettings.internalValue;
  }

  // hypervisor_iso - computed: false, optional: true, required: false
  private _hypervisorIso = new FoundationImageNodesHypervisorIsoOutputReference(this, "hypervisor_iso");
  public get hypervisorIso() {
    return this._hypervisorIso;
  }
  public putHypervisorIso(value: FoundationImageNodesHypervisorIso) {
    this._hypervisorIso.internalValue = value;
  }
  public resetHypervisorIso() {
    this._hypervisorIso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorIsoInput() {
    return this._hypervisorIso.internalValue;
  }

  // tests - computed: false, optional: true, required: false
  private _tests = new FoundationImageNodesTestsOutputReference(this, "tests");
  public get tests() {
    return this._tests;
  }
  public putTests(value: FoundationImageNodesTests) {
    this._tests.internalValue = value;
  }
  public resetTests() {
    this._tests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testsInput() {
    return this._tests.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FoundationImageNodesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FoundationImageNodesTimeouts) {
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
      cvm_gateway: cdktf.stringToTerraform(this._cvmGateway),
      cvm_netmask: cdktf.stringToTerraform(this._cvmNetmask),
      hyperv_external_vnic: cdktf.stringToTerraform(this._hypervExternalVnic),
      hyperv_external_vswitch: cdktf.stringToTerraform(this._hypervExternalVswitch),
      hyperv_product_key: cdktf.stringToTerraform(this._hypervProductKey),
      hyperv_sku: cdktf.booleanToTerraform(this._hypervSku),
      hypervisor_gateway: cdktf.stringToTerraform(this._hypervisorGateway),
      hypervisor_nameserver: cdktf.stringToTerraform(this._hypervisorNameserver),
      hypervisor_netmask: cdktf.stringToTerraform(this._hypervisorNetmask),
      hypervisor_password: cdktf.stringToTerraform(this._hypervisorPassword),
      id: cdktf.stringToTerraform(this._id),
      install_script: cdktf.stringToTerraform(this._installScript),
      ipmi_gateway: cdktf.stringToTerraform(this._ipmiGateway),
      ipmi_netmask: cdktf.stringToTerraform(this._ipmiNetmask),
      ipmi_password: cdktf.stringToTerraform(this._ipmiPassword),
      ipmi_user: cdktf.stringToTerraform(this._ipmiUser),
      layout_egg_uuid: cdktf.stringToTerraform(this._layoutEggUuid),
      nos_package: cdktf.stringToTerraform(this._nosPackage),
      skip_hypervisor: cdktf.booleanToTerraform(this._skipHypervisor),
      svm_rescue_args: cdktf.listMapper(cdktf.stringToTerraform, false)(this._svmRescueArgs),
      ucsm_ip: cdktf.stringToTerraform(this._ucsmIp),
      ucsm_password: cdktf.stringToTerraform(this._ucsmPassword),
      ucsm_user: cdktf.stringToTerraform(this._ucsmUser),
      unc_password: cdktf.stringToTerraform(this._uncPassword),
      unc_path: cdktf.stringToTerraform(this._uncPath),
      unc_username: cdktf.stringToTerraform(this._uncUsername),
      xen_config_type: cdktf.stringToTerraform(this._xenConfigType),
      xs_master_ip: cdktf.stringToTerraform(this._xsMasterIp),
      xs_master_label: cdktf.stringToTerraform(this._xsMasterLabel),
      xs_master_password: cdktf.stringToTerraform(this._xsMasterPassword),
      xs_master_username: cdktf.stringToTerraform(this._xsMasterUsername),
      blocks: cdktf.listMapper(foundationImageNodesBlocksToTerraform, true)(this._blocks.internalValue),
      clusters: cdktf.listMapper(foundationImageNodesClustersToTerraform, true)(this._clusters.internalValue),
      eos_metadata: foundationImageNodesEosMetadataToTerraform(this._eosMetadata.internalValue),
      fc_settings: foundationImageNodesFcSettingsToTerraform(this._fcSettings.internalValue),
      hypervisor_iso: foundationImageNodesHypervisorIsoToTerraform(this._hypervisorIso.internalValue),
      tests: foundationImageNodesTestsToTerraform(this._tests.internalValue),
      timeouts: foundationImageNodesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cvm_gateway: {
        value: cdktf.stringToHclTerraform(this._cvmGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cvm_netmask: {
        value: cdktf.stringToHclTerraform(this._cvmNetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hyperv_external_vnic: {
        value: cdktf.stringToHclTerraform(this._hypervExternalVnic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hyperv_external_vswitch: {
        value: cdktf.stringToHclTerraform(this._hypervExternalVswitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hyperv_product_key: {
        value: cdktf.stringToHclTerraform(this._hypervProductKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hyperv_sku: {
        value: cdktf.booleanToHclTerraform(this._hypervSku),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hypervisor_gateway: {
        value: cdktf.stringToHclTerraform(this._hypervisorGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_nameserver: {
        value: cdktf.stringToHclTerraform(this._hypervisorNameserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_netmask: {
        value: cdktf.stringToHclTerraform(this._hypervisorNetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_password: {
        value: cdktf.stringToHclTerraform(this._hypervisorPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      install_script: {
        value: cdktf.stringToHclTerraform(this._installScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipmi_gateway: {
        value: cdktf.stringToHclTerraform(this._ipmiGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipmi_netmask: {
        value: cdktf.stringToHclTerraform(this._ipmiNetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipmi_password: {
        value: cdktf.stringToHclTerraform(this._ipmiPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipmi_user: {
        value: cdktf.stringToHclTerraform(this._ipmiUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layout_egg_uuid: {
        value: cdktf.stringToHclTerraform(this._layoutEggUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nos_package: {
        value: cdktf.stringToHclTerraform(this._nosPackage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_hypervisor: {
        value: cdktf.booleanToHclTerraform(this._skipHypervisor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      svm_rescue_args: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._svmRescueArgs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ucsm_ip: {
        value: cdktf.stringToHclTerraform(this._ucsmIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ucsm_password: {
        value: cdktf.stringToHclTerraform(this._ucsmPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ucsm_user: {
        value: cdktf.stringToHclTerraform(this._ucsmUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unc_password: {
        value: cdktf.stringToHclTerraform(this._uncPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unc_path: {
        value: cdktf.stringToHclTerraform(this._uncPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unc_username: {
        value: cdktf.stringToHclTerraform(this._uncUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xen_config_type: {
        value: cdktf.stringToHclTerraform(this._xenConfigType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xs_master_ip: {
        value: cdktf.stringToHclTerraform(this._xsMasterIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xs_master_label: {
        value: cdktf.stringToHclTerraform(this._xsMasterLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xs_master_password: {
        value: cdktf.stringToHclTerraform(this._xsMasterPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xs_master_username: {
        value: cdktf.stringToHclTerraform(this._xsMasterUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocks: {
        value: cdktf.listMapperHcl(foundationImageNodesBlocksToHclTerraform, true)(this._blocks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FoundationImageNodesBlocksList",
      },
      clusters: {
        value: cdktf.listMapperHcl(foundationImageNodesClustersToHclTerraform, true)(this._clusters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FoundationImageNodesClustersList",
      },
      eos_metadata: {
        value: foundationImageNodesEosMetadataToHclTerraform(this._eosMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FoundationImageNodesEosMetadataList",
      },
      fc_settings: {
        value: foundationImageNodesFcSettingsToHclTerraform(this._fcSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FoundationImageNodesFcSettingsList",
      },
      hypervisor_iso: {
        value: foundationImageNodesHypervisorIsoToHclTerraform(this._hypervisorIso.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FoundationImageNodesHypervisorIsoList",
      },
      tests: {
        value: foundationImageNodesTestsToHclTerraform(this._tests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FoundationImageNodesTestsList",
      },
      timeouts: {
        value: foundationImageNodesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FoundationImageNodesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
