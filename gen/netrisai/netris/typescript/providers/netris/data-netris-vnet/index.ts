// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetrisVnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#id DataNetrisVnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the vnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#name DataNetrisVnet#name}
  */
  readonly name: string;
  /**
  * V-Net state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#state DataNetrisVnet#state}
  */
  readonly state?: string;
  /**
  * ID of tenant. Users of this tenant will be permitted to edit this unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#tenantid DataNetrisVnet#tenantid}
  */
  readonly tenantid?: number;
  /**
  * ID of VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#vpcid DataNetrisVnet#vpcid}
  */
  readonly vpcid?: number;
  /**
  * sites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#sites DataNetrisVnet#sites}
  */
  readonly sites?: DataNetrisVnetSites[] | cdktf.IResolvable;
}
export interface DataNetrisVnetSitesGateways {
  /**
  * The address will be serving as anycast default gateway for selected subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#prefix DataNetrisVnet#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#vlanid DataNetrisVnet#vlanid}
  */
  readonly vlanid?: string;
}

export function dataNetrisVnetSitesGatewaysToTerraform(struct?: DataNetrisVnetSitesGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    vlanid: cdktf.stringToTerraform(struct!.vlanid),
  }
}


export function dataNetrisVnetSitesGatewaysToHclTerraform(struct?: DataNetrisVnetSitesGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlanid: {
      value: cdktf.stringToHclTerraform(struct!.vlanid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetrisVnetSitesGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetrisVnetSitesGateways | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._vlanid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanid = this._vlanid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetrisVnetSitesGateways | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._vlanid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._vlanid = value.vlanid;
    }
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // vlanid - computed: false, optional: true, required: false
  private _vlanid?: string; 
  public get vlanid() {
    return this.getStringAttribute('vlanid');
  }
  public set vlanid(value: string) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }
}

export class DataNetrisVnetSitesGatewaysList extends cdktf.ComplexList {
  public internalValue? : DataNetrisVnetSitesGateways[] | cdktf.IResolvable

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
  public get(index: number): DataNetrisVnetSitesGatewaysOutputReference {
    return new DataNetrisVnetSitesGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetrisVnetSitesPorts {
  /**
  * Switch port name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#name DataNetrisVnet#name}
  */
  readonly name?: string;
  /**
  * VLAN tag for current port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#vlanid DataNetrisVnet#vlanid}
  */
  readonly vlanid?: string;
}

export function dataNetrisVnetSitesPortsToTerraform(struct?: DataNetrisVnetSitesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vlanid: cdktf.stringToTerraform(struct!.vlanid),
  }
}


export function dataNetrisVnetSitesPortsToHclTerraform(struct?: DataNetrisVnetSitesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlanid: {
      value: cdktf.stringToHclTerraform(struct!.vlanid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetrisVnetSitesPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetrisVnetSitesPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vlanid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanid = this._vlanid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetrisVnetSitesPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vlanid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vlanid = value.vlanid;
    }
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

  // vlanid - computed: false, optional: true, required: false
  private _vlanid?: string; 
  public get vlanid() {
    return this.getStringAttribute('vlanid');
  }
  public set vlanid(value: string) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }
}

export class DataNetrisVnetSitesPortsList extends cdktf.ComplexList {
  public internalValue? : DataNetrisVnetSitesPorts[] | cdktf.IResolvable

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
  public get(index: number): DataNetrisVnetSitesPortsOutputReference {
    return new DataNetrisVnetSitesPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetrisVnetSites {
  /**
  * The site ID. Ports from these sites will be allowed to participate in the V-Net.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#id DataNetrisVnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * gateways block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#gateways DataNetrisVnet#gateways}
  */
  readonly gateways?: DataNetrisVnetSitesGateways[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#ports DataNetrisVnet#ports}
  */
  readonly ports?: DataNetrisVnetSitesPorts[] | cdktf.IResolvable;
}

export function dataNetrisVnetSitesToTerraform(struct?: DataNetrisVnetSites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    gateways: cdktf.listMapper(dataNetrisVnetSitesGatewaysToTerraform, true)(struct!.gateways),
    ports: cdktf.listMapper(dataNetrisVnetSitesPortsToTerraform, true)(struct!.ports),
  }
}


export function dataNetrisVnetSitesToHclTerraform(struct?: DataNetrisVnetSites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateways: {
      value: cdktf.listMapperHcl(dataNetrisVnetSitesGatewaysToHclTerraform, true)(struct!.gateways),
      isBlock: true,
      type: "list",
      storageClassType: "DataNetrisVnetSitesGatewaysList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataNetrisVnetSitesPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataNetrisVnetSitesPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetrisVnetSitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetrisVnetSites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._gateways?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetrisVnetSites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._gateways.internalValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._gateways.internalValue = value.gateways;
      this._ports.internalValue = value.ports;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways = new DataNetrisVnetSitesGatewaysList(this, "gateways", false);
  public get gateways() {
    return this._gateways;
  }
  public putGateways(value: DataNetrisVnetSitesGateways[] | cdktf.IResolvable) {
    this._gateways.internalValue = value;
  }
  public resetGateways() {
    this._gateways.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataNetrisVnetSitesPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataNetrisVnetSitesPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class DataNetrisVnetSitesList extends cdktf.ComplexList {
  public internalValue? : DataNetrisVnetSites[] | cdktf.IResolvable

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
  public get(index: number): DataNetrisVnetSitesOutputReference {
    return new DataNetrisVnetSitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet netris_vnet}
*/
export class DataNetrisVnet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_vnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetrisVnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetrisVnet to import
  * @param importFromId The id of the existing DataNetrisVnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetrisVnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_vnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/vnet netris_vnet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetrisVnetConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetrisVnetConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_vnet',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6'
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
    this._name = config.name;
    this._state = config.state;
    this._tenantid = config.tenantid;
    this._vpcid = config.vpcid;
    this._sites.internalValue = config.sites;
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

  // tenantid - computed: true, optional: true, required: false
  private _tenantid?: number; 
  public get tenantid() {
    return this.getNumberAttribute('tenantid');
  }
  public set tenantid(value: number) {
    this._tenantid = value;
  }
  public resetTenantid() {
    this._tenantid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantidInput() {
    return this._tenantid;
  }

  // vpcid - computed: false, optional: true, required: false
  private _vpcid?: number; 
  public get vpcid() {
    return this.getNumberAttribute('vpcid');
  }
  public set vpcid(value: number) {
    this._vpcid = value;
  }
  public resetVpcid() {
    this._vpcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcidInput() {
    return this._vpcid;
  }

  // sites - computed: false, optional: true, required: false
  private _sites = new DataNetrisVnetSitesList(this, "sites", false);
  public get sites() {
    return this._sites;
  }
  public putSites(value: DataNetrisVnetSites[] | cdktf.IResolvable) {
    this._sites.internalValue = value;
  }
  public resetSites() {
    this._sites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitesInput() {
    return this._sites.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      tenantid: cdktf.numberToTerraform(this._tenantid),
      vpcid: cdktf.numberToTerraform(this._vpcid),
      sites: cdktf.listMapper(dataNetrisVnetSitesToTerraform, true)(this._sites.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenantid: {
        value: cdktf.numberToHclTerraform(this._tenantid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpcid: {
        value: cdktf.numberToHclTerraform(this._vpcid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sites: {
        value: cdktf.listMapperHcl(dataNetrisVnetSitesToHclTerraform, true)(this._sites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNetrisVnetSitesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
