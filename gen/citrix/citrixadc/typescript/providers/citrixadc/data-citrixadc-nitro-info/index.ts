// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/data-sources/nitro_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixadcNitroInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/data-sources/nitro_info#id DataCitrixadcNitroInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/data-sources/nitro_info#nitro_object DataCitrixadcNitroInfo#nitro_object}
  */
  readonly nitroObject?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/data-sources/nitro_info#primary_id DataCitrixadcNitroInfo#primary_id}
  */
  readonly primaryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/data-sources/nitro_info#query_args DataCitrixadcNitroInfo#query_args}
  */
  readonly queryArgs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/data-sources/nitro_info#secondary_id DataCitrixadcNitroInfo#secondary_id}
  */
  readonly secondaryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/data-sources/nitro_info#workflow DataCitrixadcNitroInfo#workflow}
  */
  readonly workflow?: { [key: string]: string };
  /**
  * nitro_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/data-sources/nitro_info#nitro_list DataCitrixadcNitroInfo#nitro_list}
  */
  readonly nitroList?: DataCitrixadcNitroInfoNitroListStruct[] | cdktf.IResolvable;
}
export interface DataCitrixadcNitroInfoNitroListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/data-sources/nitro_info#object DataCitrixadcNitroInfo#object}
  */
  readonly object?: { [key: string]: string };
}

export function dataCitrixadcNitroInfoNitroListStructToTerraform(struct?: DataCitrixadcNitroInfoNitroListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
  }
}


export function dataCitrixadcNitroInfoNitroListStructToHclTerraform(struct?: DataCitrixadcNitroInfoNitroListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCitrixadcNitroInfoNitroListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCitrixadcNitroInfoNitroListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixadcNitroInfoNitroListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._object = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._object = value.object;
    }
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}

export class DataCitrixadcNitroInfoNitroListStructList extends cdktf.ComplexList {
  public internalValue? : DataCitrixadcNitroInfoNitroListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataCitrixadcNitroInfoNitroListStructOutputReference {
    return new DataCitrixadcNitroInfoNitroListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/data-sources/nitro_info citrixadc_nitro_info}
*/
export class DataCitrixadcNitroInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nitro_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixadcNitroInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixadcNitroInfo to import
  * @param importFromId The id of the existing DataCitrixadcNitroInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/data-sources/nitro_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixadcNitroInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nitro_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/data-sources/nitro_info citrixadc_nitro_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixadcNitroInfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCitrixadcNitroInfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nitro_info',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._nitroObject = config.nitroObject;
    this._primaryId = config.primaryId;
    this._queryArgs = config.queryArgs;
    this._secondaryId = config.secondaryId;
    this._workflow = config.workflow;
    this._nitroList.internalValue = config.nitroList;
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

  // nitro_object - computed: true, optional: true, required: false
  private _nitroObject?: { [key: string]: string }; 
  public get nitroObject() {
    return this.getStringMapAttribute('nitro_object');
  }
  public set nitroObject(value: { [key: string]: string }) {
    this._nitroObject = value;
  }
  public resetNitroObject() {
    this._nitroObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nitroObjectInput() {
    return this._nitroObject;
  }

  // primary_id - computed: true, optional: true, required: false
  private _primaryId?: string; 
  public get primaryId() {
    return this.getStringAttribute('primary_id');
  }
  public set primaryId(value: string) {
    this._primaryId = value;
  }
  public resetPrimaryId() {
    this._primaryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIdInput() {
    return this._primaryId;
  }

  // query_args - computed: false, optional: true, required: false
  private _queryArgs?: { [key: string]: string }; 
  public get queryArgs() {
    return this.getStringMapAttribute('query_args');
  }
  public set queryArgs(value: { [key: string]: string }) {
    this._queryArgs = value;
  }
  public resetQueryArgs() {
    this._queryArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryArgsInput() {
    return this._queryArgs;
  }

  // secondary_id - computed: true, optional: true, required: false
  private _secondaryId?: string; 
  public get secondaryId() {
    return this.getStringAttribute('secondary_id');
  }
  public set secondaryId(value: string) {
    this._secondaryId = value;
  }
  public resetSecondaryId() {
    this._secondaryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIdInput() {
    return this._secondaryId;
  }

  // workflow - computed: true, optional: true, required: false
  private _workflow?: { [key: string]: string }; 
  public get workflow() {
    return this.getStringMapAttribute('workflow');
  }
  public set workflow(value: { [key: string]: string }) {
    this._workflow = value;
  }
  public resetWorkflow() {
    this._workflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow;
  }

  // nitro_list - computed: false, optional: true, required: false
  private _nitroList = new DataCitrixadcNitroInfoNitroListStructList(this, "nitro_list", false);
  public get nitroList() {
    return this._nitroList;
  }
  public putNitroList(value: DataCitrixadcNitroInfoNitroListStruct[] | cdktf.IResolvable) {
    this._nitroList.internalValue = value;
  }
  public resetNitroList() {
    this._nitroList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nitroListInput() {
    return this._nitroList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      nitro_object: cdktf.hashMapper(cdktf.stringToTerraform)(this._nitroObject),
      primary_id: cdktf.stringToTerraform(this._primaryId),
      query_args: cdktf.hashMapper(cdktf.stringToTerraform)(this._queryArgs),
      secondary_id: cdktf.stringToTerraform(this._secondaryId),
      workflow: cdktf.hashMapper(cdktf.stringToTerraform)(this._workflow),
      nitro_list: cdktf.listMapper(dataCitrixadcNitroInfoNitroListStructToTerraform, true)(this._nitroList.internalValue),
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
      nitro_object: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nitroObject),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      primary_id: {
        value: cdktf.stringToHclTerraform(this._primaryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_args: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._queryArgs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      secondary_id: {
        value: cdktf.stringToHclTerraform(this._secondaryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._workflow),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      nitro_list: {
        value: cdktf.listMapperHcl(dataCitrixadcNitroInfoNitroListStructToHclTerraform, true)(this._nitroList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCitrixadcNitroInfoNitroListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
