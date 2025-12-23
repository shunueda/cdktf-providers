// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firewall_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * This parameter represents the name of a Cloud-Account in Aviatrix controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firewall_tag#firewall_tag FirewallTag#firewall_tag}
  */
  readonly firewallTag: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firewall_tag#id FirewallTag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cidr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firewall_tag#cidr_list FirewallTag#cidr_list}
  */
  readonly cidrList?: FirewallTagCidrListStruct[] | cdktf.IResolvable;
}
export interface FirewallTagCidrListStruct {
  /**
  * The CIDR attribute of a policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firewall_tag#cidr FirewallTag#cidr}
  */
  readonly cidr: string;
  /**
  * The name attribute of a policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firewall_tag#cidr_tag_name FirewallTag#cidr_tag_name}
  */
  readonly cidrTagName: string;
}

export function firewallTagCidrListStructToTerraform(struct?: FirewallTagCidrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    cidr_tag_name: cdktf.stringToTerraform(struct!.cidrTagName),
  }
}


export function firewallTagCidrListStructToHclTerraform(struct?: FirewallTagCidrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_tag_name: {
      value: cdktf.stringToHclTerraform(struct!.cidrTagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallTagCidrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallTagCidrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._cidrTagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrTagName = this._cidrTagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallTagCidrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._cidrTagName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._cidrTagName = value.cidrTagName;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cidr_tag_name - computed: false, optional: false, required: true
  private _cidrTagName?: string; 
  public get cidrTagName() {
    return this.getStringAttribute('cidr_tag_name');
  }
  public set cidrTagName(value: string) {
    this._cidrTagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrTagNameInput() {
    return this._cidrTagName;
  }
}

export class FirewallTagCidrListStructList extends cdktf.ComplexList {
  public internalValue? : FirewallTagCidrListStruct[] | cdktf.IResolvable

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
  public get(index: number): FirewallTagCidrListStructOutputReference {
    return new FirewallTagCidrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firewall_tag aviatrix_firewall_tag}
*/
export class FirewallTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_firewall_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallTag to import
  * @param importFromId The id of the existing FirewallTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firewall_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_firewall_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/firewall_tag aviatrix_firewall_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallTagConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallTagConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_firewall_tag',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._firewallTag = config.firewallTag;
    this._id = config.id;
    this._cidrList.internalValue = config.cidrList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewall_tag - computed: false, optional: false, required: true
  private _firewallTag?: string; 
  public get firewallTag() {
    return this.getStringAttribute('firewall_tag');
  }
  public set firewallTag(value: string) {
    this._firewallTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTagInput() {
    return this._firewallTag;
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

  // cidr_list - computed: false, optional: true, required: false
  private _cidrList = new FirewallTagCidrListStructList(this, "cidr_list", false);
  public get cidrList() {
    return this._cidrList;
  }
  public putCidrList(value: FirewallTagCidrListStruct[] | cdktf.IResolvable) {
    this._cidrList.internalValue = value;
  }
  public resetCidrList() {
    this._cidrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrListInput() {
    return this._cidrList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_tag: cdktf.stringToTerraform(this._firewallTag),
      id: cdktf.stringToTerraform(this._id),
      cidr_list: cdktf.listMapper(firewallTagCidrListStructToTerraform, true)(this._cidrList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      firewall_tag: {
        value: cdktf.stringToHclTerraform(this._firewallTag),
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
      cidr_list: {
        value: cdktf.listMapperHcl(firewallTagCidrListStructToHclTerraform, true)(this._cidrList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallTagCidrListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
