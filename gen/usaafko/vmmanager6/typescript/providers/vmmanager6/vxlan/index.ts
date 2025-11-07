// https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vxlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VxlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account for VxLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vxlan#account Vxlan#account}
  */
  readonly account: number;
  /**
  * Array of clusters id, where this VxLAN will work
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vxlan#clusters Vxlan#clusters}
  */
  readonly clusters: number[];
  /**
  * VxLAN Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vxlan#comment Vxlan#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vxlan#id Vxlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of VxLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vxlan#name Vxlan#name}
  */
  readonly name: string;
  /**
  * ipnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vxlan#ipnets Vxlan#ipnets}
  */
  readonly ipnets?: VxlanIpnets[] | cdktf.IResolvable;
}
export interface VxlanIpnets {
  /**
  * Gateway for this network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vxlan#gateway Vxlan#gateway}
  */
  readonly gateway: string;
  /**
  * IPv4 range in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vxlan#name Vxlan#name}
  */
  readonly name: string;
}

export function vxlanIpnetsToTerraform(struct?: VxlanIpnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vxlanIpnetsToHclTerraform(struct?: VxlanIpnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxlanIpnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxlanIpnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxlanIpnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._name = value.name;
    }
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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
}

export class VxlanIpnetsList extends cdktf.ComplexList {
  public internalValue? : VxlanIpnets[] | cdktf.IResolvable

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
  public get(index: number): VxlanIpnetsOutputReference {
    return new VxlanIpnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vxlan vmmanager6_vxlan}
*/
export class Vxlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vmmanager6_vxlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vxlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vxlan to import
  * @param importFromId The id of the existing Vxlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vxlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vxlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vmmanager6_vxlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vxlan vmmanager6_vxlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VxlanConfig
  */
  public constructor(scope: Construct, id: string, config: VxlanConfig) {
    super(scope, id, {
      terraformResourceType: 'vmmanager6_vxlan',
      terraformGeneratorMetadata: {
        providerName: 'vmmanager6',
        providerVersion: '0.0.34'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._clusters = config.clusters;
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
    this._ipnets.internalValue = config.ipnets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: false, required: true
  private _account?: number; 
  public get account() {
    return this.getNumberAttribute('account');
  }
  public set account(value: number) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // clusters - computed: false, optional: false, required: true
  private _clusters?: number[]; 
  public get clusters() {
    return this.getNumberListAttribute('clusters');
  }
  public set clusters(value: number[]) {
    this._clusters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // ippool - computed: true, optional: false, required: false
  public get ippool() {
    return this.getNumberAttribute('ippool');
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

  // ipnets - computed: false, optional: true, required: false
  private _ipnets = new VxlanIpnetsList(this, "ipnets", false);
  public get ipnets() {
    return this._ipnets;
  }
  public putIpnets(value: VxlanIpnets[] | cdktf.IResolvable) {
    this._ipnets.internalValue = value;
  }
  public resetIpnets() {
    this._ipnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipnetsInput() {
    return this._ipnets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.numberToTerraform(this._account),
      clusters: cdktf.listMapper(cdktf.numberToTerraform, false)(this._clusters),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ipnets: cdktf.listMapper(vxlanIpnetsToTerraform, true)(this._ipnets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.numberToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clusters: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._clusters),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipnets: {
        value: cdktf.listMapperHcl(vxlanIpnetsToHclTerraform, true)(this._ipnets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VxlanIpnetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
