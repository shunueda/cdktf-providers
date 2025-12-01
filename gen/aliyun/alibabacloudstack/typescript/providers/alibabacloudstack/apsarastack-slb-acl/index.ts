// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackSlbAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_acl#acl_name ApsarastackSlbAcl#acl_name}
  */
  readonly aclName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_acl#address_ip_version ApsarastackSlbAcl#address_ip_version}
  */
  readonly addressIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_acl#id ApsarastackSlbAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_acl#ip_version ApsarastackSlbAcl#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_acl#name ApsarastackSlbAcl#name}
  */
  readonly name?: string;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_acl#entry_list ApsarastackSlbAcl#entry_list}
  */
  readonly entryList?: ApsarastackSlbAclEntryListStruct[] | cdktf.IResolvable;
}
export interface ApsarastackSlbAclEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_acl#comment ApsarastackSlbAcl#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_acl#entry ApsarastackSlbAcl#entry}
  */
  readonly entry: string;
}

export function apsarastackSlbAclEntryListStructToTerraform(struct?: ApsarastackSlbAclEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    entry: cdktf.stringToTerraform(struct!.entry),
  }
}


export function apsarastackSlbAclEntryListStructToHclTerraform(struct?: ApsarastackSlbAclEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry: {
      value: cdktf.stringToHclTerraform(struct!.entry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackSlbAclEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackSlbAclEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._entry !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackSlbAclEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._entry = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._entry = value.entry;
    }
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

  // entry - computed: false, optional: false, required: true
  private _entry?: string; 
  public get entry() {
    return this.getStringAttribute('entry');
  }
  public set entry(value: string) {
    this._entry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry;
  }
}

export class ApsarastackSlbAclEntryListStructList extends cdktf.ComplexList {
  public internalValue? : ApsarastackSlbAclEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackSlbAclEntryListStructOutputReference {
    return new ApsarastackSlbAclEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_acl apsarastack_slb_acl}
*/
export class ApsarastackSlbAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_slb_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackSlbAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackSlbAcl to import
  * @param importFromId The id of the existing ApsarastackSlbAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackSlbAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_slb_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_slb_acl apsarastack_slb_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackSlbAclConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApsarastackSlbAclConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_slb_acl',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclName = config.aclName;
    this._addressIpVersion = config.addressIpVersion;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._entryList.internalValue = config.entryList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_name - computed: true, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // name - computed: true, optional: true, required: false
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

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new ApsarastackSlbAclEntryListStructList(this, "entry_list", true);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: ApsarastackSlbAclEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_name: cdktf.stringToTerraform(this._aclName),
      address_ip_version: cdktf.stringToTerraform(this._addressIpVersion),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      name: cdktf.stringToTerraform(this._name),
      entry_list: cdktf.listMapper(apsarastackSlbAclEntryListStructToTerraform, true)(this._entryList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_name: {
        value: cdktf.stringToHclTerraform(this._aclName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
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
      entry_list: {
        value: cdktf.listMapperHcl(apsarastackSlbAclEntryListStructToHclTerraform, true)(this._entryList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackSlbAclEntryListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
