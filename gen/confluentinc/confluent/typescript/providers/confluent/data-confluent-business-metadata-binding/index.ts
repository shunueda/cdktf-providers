// https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/business_metadata_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfluentBusinessMetadataBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the business metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/business_metadata_binding#business_metadata_name DataConfluentBusinessMetadataBinding#business_metadata_name}
  */
  readonly businessMetadataName: string;
  /**
  * The qualified name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/business_metadata_binding#entity_name DataConfluentBusinessMetadataBinding#entity_name}
  */
  readonly entityName: string;
  /**
  * The entity type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/business_metadata_binding#entity_type DataConfluentBusinessMetadataBinding#entity_type}
  */
  readonly entityType: string;
  /**
  * The REST endpoint of the Schema Registry cluster, for example, `https://psrc-00000.us-central1.gcp.confluent.cloud:443`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/business_metadata_binding#rest_endpoint DataConfluentBusinessMetadataBinding#rest_endpoint}
  */
  readonly restEndpoint?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/business_metadata_binding#credentials DataConfluentBusinessMetadataBinding#credentials}
  */
  readonly credentials?: DataConfluentBusinessMetadataBindingCredentials;
  /**
  * schema_registry_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/business_metadata_binding#schema_registry_cluster DataConfluentBusinessMetadataBinding#schema_registry_cluster}
  */
  readonly schemaRegistryCluster?: DataConfluentBusinessMetadataBindingSchemaRegistryCluster;
}
export interface DataConfluentBusinessMetadataBindingCredentials {
  /**
  * The Cluster API Key for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/business_metadata_binding#key DataConfluentBusinessMetadataBinding#key}
  */
  readonly key: string;
  /**
  * The Cluster API Secret for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/business_metadata_binding#secret DataConfluentBusinessMetadataBinding#secret}
  */
  readonly secret: string;
}

export function dataConfluentBusinessMetadataBindingCredentialsToTerraform(struct?: DataConfluentBusinessMetadataBindingCredentialsOutputReference | DataConfluentBusinessMetadataBindingCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataConfluentBusinessMetadataBindingCredentialsToHclTerraform(struct?: DataConfluentBusinessMetadataBindingCredentialsOutputReference | DataConfluentBusinessMetadataBindingCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataConfluentBusinessMetadataBindingCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentBusinessMetadataBindingCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentBusinessMetadataBindingCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secret = value.secret;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DataConfluentBusinessMetadataBindingSchemaRegistryCluster {
  /**
  * The Schema Registry cluster ID (e.g., `lsrc-abc123`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/business_metadata_binding#id DataConfluentBusinessMetadataBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataConfluentBusinessMetadataBindingSchemaRegistryClusterToTerraform(struct?: DataConfluentBusinessMetadataBindingSchemaRegistryClusterOutputReference | DataConfluentBusinessMetadataBindingSchemaRegistryCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataConfluentBusinessMetadataBindingSchemaRegistryClusterToHclTerraform(struct?: DataConfluentBusinessMetadataBindingSchemaRegistryClusterOutputReference | DataConfluentBusinessMetadataBindingSchemaRegistryCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataConfluentBusinessMetadataBindingSchemaRegistryClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentBusinessMetadataBindingSchemaRegistryCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentBusinessMetadataBindingSchemaRegistryCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/business_metadata_binding confluent_business_metadata_binding}
*/
export class DataConfluentBusinessMetadataBinding extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_business_metadata_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfluentBusinessMetadataBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfluentBusinessMetadataBinding to import
  * @param importFromId The id of the existing DataConfluentBusinessMetadataBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/business_metadata_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfluentBusinessMetadataBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_business_metadata_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/business_metadata_binding confluent_business_metadata_binding} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfluentBusinessMetadataBindingConfig
  */
  public constructor(scope: Construct, id: string, config: DataConfluentBusinessMetadataBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_business_metadata_binding',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.51.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._businessMetadataName = config.businessMetadataName;
    this._entityName = config.entityName;
    this._entityType = config.entityType;
    this._restEndpoint = config.restEndpoint;
    this._credentials.internalValue = config.credentials;
    this._schemaRegistryCluster.internalValue = config.schemaRegistryCluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktf.StringMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // business_metadata_name - computed: false, optional: false, required: true
  private _businessMetadataName?: string; 
  public get businessMetadataName() {
    return this.getStringAttribute('business_metadata_name');
  }
  public set businessMetadataName(value: string) {
    this._businessMetadataName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessMetadataNameInput() {
    return this._businessMetadataName;
  }

  // entity_name - computed: false, optional: false, required: true
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rest_endpoint - computed: false, optional: true, required: false
  private _restEndpoint?: string; 
  public get restEndpoint() {
    return this.getStringAttribute('rest_endpoint');
  }
  public set restEndpoint(value: string) {
    this._restEndpoint = value;
  }
  public resetRestEndpoint() {
    this._restEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restEndpointInput() {
    return this._restEndpoint;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataConfluentBusinessMetadataBindingCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataConfluentBusinessMetadataBindingCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // schema_registry_cluster - computed: false, optional: true, required: false
  private _schemaRegistryCluster = new DataConfluentBusinessMetadataBindingSchemaRegistryClusterOutputReference(this, "schema_registry_cluster");
  public get schemaRegistryCluster() {
    return this._schemaRegistryCluster;
  }
  public putSchemaRegistryCluster(value: DataConfluentBusinessMetadataBindingSchemaRegistryCluster) {
    this._schemaRegistryCluster.internalValue = value;
  }
  public resetSchemaRegistryCluster() {
    this._schemaRegistryCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryClusterInput() {
    return this._schemaRegistryCluster.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business_metadata_name: cdktf.stringToTerraform(this._businessMetadataName),
      entity_name: cdktf.stringToTerraform(this._entityName),
      entity_type: cdktf.stringToTerraform(this._entityType),
      rest_endpoint: cdktf.stringToTerraform(this._restEndpoint),
      credentials: dataConfluentBusinessMetadataBindingCredentialsToTerraform(this._credentials.internalValue),
      schema_registry_cluster: dataConfluentBusinessMetadataBindingSchemaRegistryClusterToTerraform(this._schemaRegistryCluster.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business_metadata_name: {
        value: cdktf.stringToHclTerraform(this._businessMetadataName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_name: {
        value: cdktf.stringToHclTerraform(this._entityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_endpoint: {
        value: cdktf.stringToHclTerraform(this._restEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: dataConfluentBusinessMetadataBindingCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentBusinessMetadataBindingCredentialsList",
      },
      schema_registry_cluster: {
        value: dataConfluentBusinessMetadataBindingSchemaRegistryClusterToHclTerraform(this._schemaRegistryCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentBusinessMetadataBindingSchemaRegistryClusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
