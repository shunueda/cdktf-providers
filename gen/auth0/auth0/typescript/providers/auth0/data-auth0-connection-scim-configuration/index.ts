// https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/data-sources/connection_scim_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuth0ConnectionScimConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the connection for this SCIM configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/data-sources/connection_scim_configuration#connection_id DataAuth0ConnectionScimConfiguration#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/data-sources/connection_scim_configuration#id DataAuth0ConnectionScimConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * default_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/data-sources/connection_scim_configuration#default_mapping DataAuth0ConnectionScimConfiguration#default_mapping}
  */
  readonly defaultMapping?: DataAuth0ConnectionScimConfigurationDefaultMapping[] | cdktf.IResolvable;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/data-sources/connection_scim_configuration#mapping DataAuth0ConnectionScimConfiguration#mapping}
  */
  readonly mapping?: DataAuth0ConnectionScimConfigurationMapping[] | cdktf.IResolvable;
}
export interface DataAuth0ConnectionScimConfigurationDefaultMapping {
}

export function dataAuth0ConnectionScimConfigurationDefaultMappingToTerraform(struct?: DataAuth0ConnectionScimConfigurationDefaultMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0ConnectionScimConfigurationDefaultMappingToHclTerraform(struct?: DataAuth0ConnectionScimConfigurationDefaultMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0ConnectionScimConfigurationDefaultMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0ConnectionScimConfigurationDefaultMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0ConnectionScimConfigurationDefaultMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // auth0 - computed: true, optional: false, required: false
  public get auth0() {
    return this.getStringAttribute('auth0');
  }

  // scim - computed: true, optional: false, required: false
  public get scim() {
    return this.getStringAttribute('scim');
  }
}

export class DataAuth0ConnectionScimConfigurationDefaultMappingList extends cdktf.ComplexList {
  public internalValue? : DataAuth0ConnectionScimConfigurationDefaultMapping[] | cdktf.IResolvable

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
  public get(index: number): DataAuth0ConnectionScimConfigurationDefaultMappingOutputReference {
    return new DataAuth0ConnectionScimConfigurationDefaultMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0ConnectionScimConfigurationMapping {
}

export function dataAuth0ConnectionScimConfigurationMappingToTerraform(struct?: DataAuth0ConnectionScimConfigurationMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0ConnectionScimConfigurationMappingToHclTerraform(struct?: DataAuth0ConnectionScimConfigurationMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0ConnectionScimConfigurationMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0ConnectionScimConfigurationMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0ConnectionScimConfigurationMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // auth0 - computed: true, optional: false, required: false
  public get auth0() {
    return this.getStringAttribute('auth0');
  }

  // scim - computed: true, optional: false, required: false
  public get scim() {
    return this.getStringAttribute('scim');
  }
}

export class DataAuth0ConnectionScimConfigurationMappingList extends cdktf.ComplexList {
  public internalValue? : DataAuth0ConnectionScimConfigurationMapping[] | cdktf.IResolvable

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
  public get(index: number): DataAuth0ConnectionScimConfigurationMappingOutputReference {
    return new DataAuth0ConnectionScimConfigurationMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/data-sources/connection_scim_configuration auth0_connection_scim_configuration}
*/
export class DataAuth0ConnectionScimConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_connection_scim_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuth0ConnectionScimConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuth0ConnectionScimConfiguration to import
  * @param importFromId The id of the existing DataAuth0ConnectionScimConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/data-sources/connection_scim_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuth0ConnectionScimConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_connection_scim_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/data-sources/connection_scim_configuration auth0_connection_scim_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuth0ConnectionScimConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAuth0ConnectionScimConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_connection_scim_configuration',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.36.0',
        providerVersionConstraint: '1.36.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
    this._id = config.id;
    this._defaultMapping.internalValue = config.defaultMapping;
    this._mapping.internalValue = config.mapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
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

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // user_id_attribute - computed: true, optional: false, required: false
  public get userIdAttribute() {
    return this.getStringAttribute('user_id_attribute');
  }

  // default_mapping - computed: false, optional: true, required: false
  private _defaultMapping = new DataAuth0ConnectionScimConfigurationDefaultMappingList(this, "default_mapping", true);
  public get defaultMapping() {
    return this._defaultMapping;
  }
  public putDefaultMapping(value: DataAuth0ConnectionScimConfigurationDefaultMapping[] | cdktf.IResolvable) {
    this._defaultMapping.internalValue = value;
  }
  public resetDefaultMapping() {
    this._defaultMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMappingInput() {
    return this._defaultMapping.internalValue;
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping = new DataAuth0ConnectionScimConfigurationMappingList(this, "mapping", true);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: DataAuth0ConnectionScimConfigurationMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      id: cdktf.stringToTerraform(this._id),
      default_mapping: cdktf.listMapper(dataAuth0ConnectionScimConfigurationDefaultMappingToTerraform, true)(this._defaultMapping.internalValue),
      mapping: cdktf.listMapper(dataAuth0ConnectionScimConfigurationMappingToTerraform, true)(this._mapping.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
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
      default_mapping: {
        value: cdktf.listMapperHcl(dataAuth0ConnectionScimConfigurationDefaultMappingToHclTerraform, true)(this._defaultMapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAuth0ConnectionScimConfigurationDefaultMappingList",
      },
      mapping: {
        value: cdktf.listMapperHcl(dataAuth0ConnectionScimConfigurationMappingToHclTerraform, true)(this._mapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAuth0ConnectionScimConfigurationMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
