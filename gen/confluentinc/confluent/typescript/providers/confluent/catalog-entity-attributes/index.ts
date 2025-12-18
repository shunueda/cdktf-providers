// https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogEntityAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes#attributes CatalogEntityAttributes#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * The qualified name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes#entity_name CatalogEntityAttributes#entity_name}
  */
  readonly entityName: string;
  /**
  * The entity type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes#entity_type CatalogEntityAttributes#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes#id CatalogEntityAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The REST endpoint of the Schema Registry cluster, for example, `https://psrc-00000.us-central1.gcp.confluent.cloud:443`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes#rest_endpoint CatalogEntityAttributes#rest_endpoint}
  */
  readonly restEndpoint?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes#credentials CatalogEntityAttributes#credentials}
  */
  readonly credentials?: CatalogEntityAttributesCredentials;
  /**
  * schema_registry_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes#schema_registry_cluster CatalogEntityAttributes#schema_registry_cluster}
  */
  readonly schemaRegistryCluster?: CatalogEntityAttributesSchemaRegistryCluster;
}
export interface CatalogEntityAttributesCredentials {
  /**
  * The Cluster API Key for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes#key CatalogEntityAttributes#key}
  */
  readonly key: string;
  /**
  * The Cluster API Secret for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes#secret CatalogEntityAttributes#secret}
  */
  readonly secret: string;
}

export function catalogEntityAttributesCredentialsToTerraform(struct?: CatalogEntityAttributesCredentialsOutputReference | CatalogEntityAttributesCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function catalogEntityAttributesCredentialsToHclTerraform(struct?: CatalogEntityAttributesCredentialsOutputReference | CatalogEntityAttributesCredentials): any {
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

export class CatalogEntityAttributesCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogEntityAttributesCredentials | undefined {
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

  public set internalValue(value: CatalogEntityAttributesCredentials | undefined) {
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
export interface CatalogEntityAttributesSchemaRegistryCluster {
  /**
  * The Schema Registry cluster ID (e.g., `lsrc-abc123`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes#id CatalogEntityAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function catalogEntityAttributesSchemaRegistryClusterToTerraform(struct?: CatalogEntityAttributesSchemaRegistryClusterOutputReference | CatalogEntityAttributesSchemaRegistryCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function catalogEntityAttributesSchemaRegistryClusterToHclTerraform(struct?: CatalogEntityAttributesSchemaRegistryClusterOutputReference | CatalogEntityAttributesSchemaRegistryCluster): any {
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

export class CatalogEntityAttributesSchemaRegistryClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogEntityAttributesSchemaRegistryCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogEntityAttributesSchemaRegistryCluster | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes confluent_catalog_entity_attributes}
*/
export class CatalogEntityAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_catalog_entity_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogEntityAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogEntityAttributes to import
  * @param importFromId The id of the existing CatalogEntityAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogEntityAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_catalog_entity_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/catalog_entity_attributes confluent_catalog_entity_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogEntityAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogEntityAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_catalog_entity_attributes',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.57.0',
        providerVersionConstraint: '2.57.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._entityName = config.entityName;
    this._entityType = config.entityType;
    this._id = config.id;
    this._restEndpoint = config.restEndpoint;
    this._credentials.internalValue = config.credentials;
    this._schemaRegistryCluster.internalValue = config.schemaRegistryCluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
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
  private _credentials = new CatalogEntityAttributesCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: CatalogEntityAttributesCredentials) {
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
  private _schemaRegistryCluster = new CatalogEntityAttributesSchemaRegistryClusterOutputReference(this, "schema_registry_cluster");
  public get schemaRegistryCluster() {
    return this._schemaRegistryCluster;
  }
  public putSchemaRegistryCluster(value: CatalogEntityAttributesSchemaRegistryCluster) {
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
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      entity_name: cdktf.stringToTerraform(this._entityName),
      entity_type: cdktf.stringToTerraform(this._entityType),
      id: cdktf.stringToTerraform(this._id),
      rest_endpoint: cdktf.stringToTerraform(this._restEndpoint),
      credentials: catalogEntityAttributesCredentialsToTerraform(this._credentials.internalValue),
      schema_registry_cluster: catalogEntityAttributesSchemaRegistryClusterToTerraform(this._schemaRegistryCluster.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
        value: catalogEntityAttributesCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogEntityAttributesCredentialsList",
      },
      schema_registry_cluster: {
        value: catalogEntityAttributesSchemaRegistryClusterToHclTerraform(this._schemaRegistryCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogEntityAttributesSchemaRegistryClusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
