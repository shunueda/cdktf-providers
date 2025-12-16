// https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/schema_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Virtual Cluster Cloud Location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/schema_registry#cloud SchemaRegistry#cloud}
  */
  readonly cloud?: SchemaRegistryCloud;
  /**
  * Schema Registry Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/schema_registry#name SchemaRegistry#name}
  */
  readonly name: string;
}
export interface SchemaRegistryAgentKeys {
}

export function schemaRegistryAgentKeysToTerraform(struct?: SchemaRegistryAgentKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function schemaRegistryAgentKeysToHclTerraform(struct?: SchemaRegistryAgentKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SchemaRegistryAgentKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaRegistryAgentKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaRegistryAgentKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // virtual_cluster_id - computed: true, optional: false, required: false
  public get virtualClusterId() {
    return this.getStringAttribute('virtual_cluster_id');
  }
}

export class SchemaRegistryAgentKeysList extends cdktf.ComplexList {

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
  public get(index: number): SchemaRegistryAgentKeysOutputReference {
    return new SchemaRegistryAgentKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchemaRegistryCloud {
  /**
  * Cloud Provider. Valid providers are: `aws` (default), `gcp`, and `azure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/schema_registry#provider SchemaRegistry#provider}
  */
  readonly provider?: string;
  /**
  * Cloud Region. Defaults to `us-east-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/schema_registry#region SchemaRegistry#region}
  */
  readonly region?: string;
}

export function schemaRegistryCloudToTerraform(struct?: SchemaRegistryCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function schemaRegistryCloudToHclTerraform(struct?: SchemaRegistryCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaRegistryCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SchemaRegistryCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaRegistryCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provider = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provider = value.provider;
      this._region = value.region;
    }
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/schema_registry warpstream_schema_registry}
*/
export class SchemaRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "warpstream_schema_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaRegistry to import
  * @param importFromId The id of the existing SchemaRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/schema_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "warpstream_schema_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/schema_registry warpstream_schema_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'warpstream_schema_registry',
      terraformGeneratorMetadata: {
        providerName: 'warpstream',
        providerVersion: '2.3.5',
        providerVersionConstraint: '2.3.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloud.internalValue = config.cloud;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_keys - computed: true, optional: false, required: false
  private _agentKeys = new SchemaRegistryAgentKeysList(this, "agent_keys", false);
  public get agentKeys() {
    return this._agentKeys;
  }

  // bootstrap_url - computed: true, optional: false, required: false
  public get bootstrapUrl() {
    return this.getStringAttribute('bootstrap_url');
  }

  // cloud - computed: true, optional: true, required: false
  private _cloud = new SchemaRegistryCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: SchemaRegistryCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud: schemaRegistryCloudToTerraform(this._cloud.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud: {
        value: schemaRegistryCloudToHclTerraform(this._cloud.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SchemaRegistryCloud",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
