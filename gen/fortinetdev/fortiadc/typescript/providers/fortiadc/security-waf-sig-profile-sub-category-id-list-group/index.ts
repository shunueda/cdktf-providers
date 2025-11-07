// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_sig_profile_sub_category_id_list_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityWafSigProfileSubCategoryIdListGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_sig_profile_sub_category_id_list_group#id SecurityWafSigProfileSubCategoryIdListGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_sig_profile_sub_category_id_list_group#pkey SecurityWafSigProfileSubCategoryIdListGroup#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_sig_profile_sub_category_id_list_group#type SecurityWafSigProfileSubCategoryIdListGroup#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_sig_profile_sub_category_id_list_group#vdom SecurityWafSigProfileSubCategoryIdListGroup#vdom}
  */
  readonly vdom?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_sig_profile_sub_category_id_list_group#values SecurityWafSigProfileSubCategoryIdListGroup#values}
  */
  readonly values?: SecurityWafSigProfileSubCategoryIdListGroupValues[] | cdktf.IResolvable;
}
export interface SecurityWafSigProfileSubCategoryIdListGroupValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_sig_profile_sub_category_id_list_group#mkey SecurityWafSigProfileSubCategoryIdListGroup#mkey}
  */
  readonly mkey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_sig_profile_sub_category_id_list_group#parent_id SecurityWafSigProfileSubCategoryIdListGroup#parent_id}
  */
  readonly parentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_sig_profile_sub_category_id_list_group#status SecurityWafSigProfileSubCategoryIdListGroup#status}
  */
  readonly status?: string;
}

export function securityWafSigProfileSubCategoryIdListGroupValuesToTerraform(struct?: SecurityWafSigProfileSubCategoryIdListGroupValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mkey: cdktf.stringToTerraform(struct!.mkey),
    parent_id: cdktf.stringToTerraform(struct!.parentId),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function securityWafSigProfileSubCategoryIdListGroupValuesToHclTerraform(struct?: SecurityWafSigProfileSubCategoryIdListGroupValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mkey: {
      value: cdktf.stringToHclTerraform(struct!.mkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_id: {
      value: cdktf.stringToHclTerraform(struct!.parentId),
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

export class SecurityWafSigProfileSubCategoryIdListGroupValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityWafSigProfileSubCategoryIdListGroupValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mkey = this._mkey;
    }
    if (this._parentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentId = this._parentId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityWafSigProfileSubCategoryIdListGroupValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mkey = undefined;
      this._parentId = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mkey = value.mkey;
      this._parentId = value.parentId;
      this._status = value.status;
    }
  }

  // mkey - computed: false, optional: true, required: false
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  public resetMkey() {
    this._mkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
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

export class SecurityWafSigProfileSubCategoryIdListGroupValuesList extends cdktf.ComplexList {
  public internalValue? : SecurityWafSigProfileSubCategoryIdListGroupValues[] | cdktf.IResolvable

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
  public get(index: number): SecurityWafSigProfileSubCategoryIdListGroupValuesOutputReference {
    return new SecurityWafSigProfileSubCategoryIdListGroupValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_sig_profile_sub_category_id_list_group fortiadc_security_waf_sig_profile_sub_category_id_list_group}
*/
export class SecurityWafSigProfileSubCategoryIdListGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_security_waf_sig_profile_sub_category_id_list_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityWafSigProfileSubCategoryIdListGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityWafSigProfileSubCategoryIdListGroup to import
  * @param importFromId The id of the existing SecurityWafSigProfileSubCategoryIdListGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_sig_profile_sub_category_id_list_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityWafSigProfileSubCategoryIdListGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_security_waf_sig_profile_sub_category_id_list_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_sig_profile_sub_category_id_list_group fortiadc_security_waf_sig_profile_sub_category_id_list_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityWafSigProfileSubCategoryIdListGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityWafSigProfileSubCategoryIdListGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_security_waf_sig_profile_sub_category_id_list_group',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
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
    this._pkey = config.pkey;
    this._type = config.type;
    this._vdom = config.vdom;
    this._values.internalValue = config.values;
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

  // pkey - computed: false, optional: false, required: true
  private _pkey?: string; 
  public get pkey() {
    return this.getStringAttribute('pkey');
  }
  public set pkey(value: string) {
    this._pkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkeyInput() {
    return this._pkey;
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // values - computed: false, optional: true, required: false
  private _values = new SecurityWafSigProfileSubCategoryIdListGroupValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: SecurityWafSigProfileSubCategoryIdListGroupValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pkey: cdktf.stringToTerraform(this._pkey),
      type: cdktf.stringToTerraform(this._type),
      vdom: cdktf.stringToTerraform(this._vdom),
      values: cdktf.listMapper(securityWafSigProfileSubCategoryIdListGroupValuesToTerraform, true)(this._values.internalValue),
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
      pkey: {
        value: cdktf.stringToHclTerraform(this._pkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      values: {
        value: cdktf.listMapperHcl(securityWafSigProfileSubCategoryIdListGroupValuesToHclTerraform, true)(this._values.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityWafSigProfileSubCategoryIdListGroupValuesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
