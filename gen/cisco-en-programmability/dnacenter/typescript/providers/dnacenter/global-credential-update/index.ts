// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalCredentialUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_update#id GlobalCredentialUpdate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_update#parameters GlobalCredentialUpdate#parameters}
  */
  readonly parameters: GlobalCredentialUpdateParameters;
}
export interface GlobalCredentialUpdateItem {
}

export function globalCredentialUpdateItemToTerraform(struct?: GlobalCredentialUpdateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function globalCredentialUpdateItemToHclTerraform(struct?: GlobalCredentialUpdateItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GlobalCredentialUpdateItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalCredentialUpdateItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalCredentialUpdateItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class GlobalCredentialUpdateItemList extends cdktf.ComplexList {

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
  public get(index: number): GlobalCredentialUpdateItemOutputReference {
    return new GlobalCredentialUpdateItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalCredentialUpdateParameters {
  /**
  * globalCredentialId path parameter. Global credential Uuid
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_update#global_credential_id GlobalCredentialUpdate#global_credential_id}
  */
  readonly globalCredentialId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_update#site_uuids GlobalCredentialUpdate#site_uuids}
  */
  readonly siteUuids?: string[];
}

export function globalCredentialUpdateParametersToTerraform(struct?: GlobalCredentialUpdateParametersOutputReference | GlobalCredentialUpdateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_credential_id: cdktf.stringToTerraform(struct!.globalCredentialId),
    site_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteUuids),
  }
}


export function globalCredentialUpdateParametersToHclTerraform(struct?: GlobalCredentialUpdateParametersOutputReference | GlobalCredentialUpdateParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.globalCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.siteUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalCredentialUpdateParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalCredentialUpdateParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalCredentialId = this._globalCredentialId;
    }
    if (this._siteUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteUuids = this._siteUuids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalCredentialUpdateParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalCredentialId = undefined;
      this._siteUuids = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalCredentialId = value.globalCredentialId;
      this._siteUuids = value.siteUuids;
    }
  }

  // global_credential_id - computed: false, optional: false, required: true
  private _globalCredentialId?: string; 
  public get globalCredentialId() {
    return this.getStringAttribute('global_credential_id');
  }
  public set globalCredentialId(value: string) {
    this._globalCredentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalCredentialIdInput() {
    return this._globalCredentialId;
  }

  // site_uuids - computed: true, optional: true, required: false
  private _siteUuids?: string[]; 
  public get siteUuids() {
    return this.getListAttribute('site_uuids');
  }
  public set siteUuids(value: string[]) {
    this._siteUuids = value;
  }
  public resetSiteUuids() {
    this._siteUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteUuidsInput() {
    return this._siteUuids;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_update dnacenter_global_credential_update}
*/
export class GlobalCredentialUpdate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_global_credential_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalCredentialUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalCredentialUpdate to import
  * @param importFromId The id of the existing GlobalCredentialUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalCredentialUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_global_credential_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_update dnacenter_global_credential_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalCredentialUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalCredentialUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_global_credential_update',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new GlobalCredentialUpdateItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new GlobalCredentialUpdateParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GlobalCredentialUpdateParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: globalCredentialUpdateParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: globalCredentialUpdateParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalCredentialUpdateParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
