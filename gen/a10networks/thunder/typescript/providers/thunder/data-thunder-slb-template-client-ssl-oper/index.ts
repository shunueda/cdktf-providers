// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_client_ssl_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbTemplateClientSslOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_client_ssl_oper#id DataThunderSlbTemplateClientSslOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Client SSL Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_client_ssl_oper#name DataThunderSlbTemplateClientSslOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_client_ssl_oper#oper DataThunderSlbTemplateClientSslOper#oper}
  */
  readonly oper?: DataThunderSlbTemplateClientSslOperOper;
}
export interface DataThunderSlbTemplateClientSslOperOperCertStatusListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_client_ssl_oper#cert_status_age DataThunderSlbTemplateClientSslOper#cert_status_age}
  */
  readonly certStatusAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_client_ssl_oper#cert_status_name DataThunderSlbTemplateClientSslOper#cert_status_name}
  */
  readonly certStatusName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_client_ssl_oper#cert_status_next_update DataThunderSlbTemplateClientSslOper#cert_status_next_update}
  */
  readonly certStatusNextUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_client_ssl_oper#cert_status_responder DataThunderSlbTemplateClientSslOper#cert_status_responder}
  */
  readonly certStatusResponder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_client_ssl_oper#cert_status_status DataThunderSlbTemplateClientSslOper#cert_status_status}
  */
  readonly certStatusStatus?: string;
}

export function dataThunderSlbTemplateClientSslOperOperCertStatusListStructToTerraform(struct?: DataThunderSlbTemplateClientSslOperOperCertStatusListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_status_age: cdktf.numberToTerraform(struct!.certStatusAge),
    cert_status_name: cdktf.stringToTerraform(struct!.certStatusName),
    cert_status_next_update: cdktf.stringToTerraform(struct!.certStatusNextUpdate),
    cert_status_responder: cdktf.stringToTerraform(struct!.certStatusResponder),
    cert_status_status: cdktf.stringToTerraform(struct!.certStatusStatus),
  }
}


export function dataThunderSlbTemplateClientSslOperOperCertStatusListStructToHclTerraform(struct?: DataThunderSlbTemplateClientSslOperOperCertStatusListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_status_age: {
      value: cdktf.numberToHclTerraform(struct!.certStatusAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_status_name: {
      value: cdktf.stringToHclTerraform(struct!.certStatusName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_status_next_update: {
      value: cdktf.stringToHclTerraform(struct!.certStatusNextUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_status_responder: {
      value: cdktf.stringToHclTerraform(struct!.certStatusResponder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_status_status: {
      value: cdktf.stringToHclTerraform(struct!.certStatusStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbTemplateClientSslOperOperCertStatusListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbTemplateClientSslOperOperCertStatusListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certStatusAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.certStatusAge = this._certStatusAge;
    }
    if (this._certStatusName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certStatusName = this._certStatusName;
    }
    if (this._certStatusNextUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certStatusNextUpdate = this._certStatusNextUpdate;
    }
    if (this._certStatusResponder !== undefined) {
      hasAnyValues = true;
      internalValueResult.certStatusResponder = this._certStatusResponder;
    }
    if (this._certStatusStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.certStatusStatus = this._certStatusStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbTemplateClientSslOperOperCertStatusListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certStatusAge = undefined;
      this._certStatusName = undefined;
      this._certStatusNextUpdate = undefined;
      this._certStatusResponder = undefined;
      this._certStatusStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certStatusAge = value.certStatusAge;
      this._certStatusName = value.certStatusName;
      this._certStatusNextUpdate = value.certStatusNextUpdate;
      this._certStatusResponder = value.certStatusResponder;
      this._certStatusStatus = value.certStatusStatus;
    }
  }

  // cert_status_age - computed: false, optional: true, required: false
  private _certStatusAge?: number; 
  public get certStatusAge() {
    return this.getNumberAttribute('cert_status_age');
  }
  public set certStatusAge(value: number) {
    this._certStatusAge = value;
  }
  public resetCertStatusAge() {
    this._certStatusAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certStatusAgeInput() {
    return this._certStatusAge;
  }

  // cert_status_name - computed: false, optional: true, required: false
  private _certStatusName?: string; 
  public get certStatusName() {
    return this.getStringAttribute('cert_status_name');
  }
  public set certStatusName(value: string) {
    this._certStatusName = value;
  }
  public resetCertStatusName() {
    this._certStatusName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certStatusNameInput() {
    return this._certStatusName;
  }

  // cert_status_next_update - computed: false, optional: true, required: false
  private _certStatusNextUpdate?: string; 
  public get certStatusNextUpdate() {
    return this.getStringAttribute('cert_status_next_update');
  }
  public set certStatusNextUpdate(value: string) {
    this._certStatusNextUpdate = value;
  }
  public resetCertStatusNextUpdate() {
    this._certStatusNextUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certStatusNextUpdateInput() {
    return this._certStatusNextUpdate;
  }

  // cert_status_responder - computed: false, optional: true, required: false
  private _certStatusResponder?: string; 
  public get certStatusResponder() {
    return this.getStringAttribute('cert_status_responder');
  }
  public set certStatusResponder(value: string) {
    this._certStatusResponder = value;
  }
  public resetCertStatusResponder() {
    this._certStatusResponder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certStatusResponderInput() {
    return this._certStatusResponder;
  }

  // cert_status_status - computed: false, optional: true, required: false
  private _certStatusStatus?: string; 
  public get certStatusStatus() {
    return this.getStringAttribute('cert_status_status');
  }
  public set certStatusStatus(value: string) {
    this._certStatusStatus = value;
  }
  public resetCertStatusStatus() {
    this._certStatusStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certStatusStatusInput() {
    return this._certStatusStatus;
  }
}

export class DataThunderSlbTemplateClientSslOperOperCertStatusListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbTemplateClientSslOperOperCertStatusListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbTemplateClientSslOperOperCertStatusListStructOutputReference {
    return new DataThunderSlbTemplateClientSslOperOperCertStatusListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbTemplateClientSslOperOper {
  /**
  * cert_status_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_client_ssl_oper#cert_status_list DataThunderSlbTemplateClientSslOper#cert_status_list}
  */
  readonly certStatusList?: DataThunderSlbTemplateClientSslOperOperCertStatusListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbTemplateClientSslOperOperToTerraform(struct?: DataThunderSlbTemplateClientSslOperOperOutputReference | DataThunderSlbTemplateClientSslOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_status_list: cdktf.listMapper(dataThunderSlbTemplateClientSslOperOperCertStatusListStructToTerraform, true)(struct!.certStatusList),
  }
}


export function dataThunderSlbTemplateClientSslOperOperToHclTerraform(struct?: DataThunderSlbTemplateClientSslOperOperOutputReference | DataThunderSlbTemplateClientSslOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_status_list: {
      value: cdktf.listMapperHcl(dataThunderSlbTemplateClientSslOperOperCertStatusListStructToHclTerraform, true)(struct!.certStatusList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbTemplateClientSslOperOperCertStatusListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbTemplateClientSslOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbTemplateClientSslOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certStatusList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certStatusList = this._certStatusList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbTemplateClientSslOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certStatusList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certStatusList.internalValue = value.certStatusList;
    }
  }

  // cert_status_list - computed: false, optional: true, required: false
  private _certStatusList = new DataThunderSlbTemplateClientSslOperOperCertStatusListStructList(this, "cert_status_list", false);
  public get certStatusList() {
    return this._certStatusList;
  }
  public putCertStatusList(value: DataThunderSlbTemplateClientSslOperOperCertStatusListStruct[] | cdktf.IResolvable) {
    this._certStatusList.internalValue = value;
  }
  public resetCertStatusList() {
    this._certStatusList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certStatusListInput() {
    return this._certStatusList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_client_ssl_oper thunder_slb_template_client_ssl_oper}
*/
export class DataThunderSlbTemplateClientSslOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_client_ssl_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbTemplateClientSslOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbTemplateClientSslOper to import
  * @param importFromId The id of the existing DataThunderSlbTemplateClientSslOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_client_ssl_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbTemplateClientSslOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_client_ssl_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_client_ssl_oper thunder_slb_template_client_ssl_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbTemplateClientSslOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbTemplateClientSslOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_client_ssl_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbTemplateClientSslOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbTemplateClientSslOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oper: dataThunderSlbTemplateClientSslOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbTemplateClientSslOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbTemplateClientSslOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
