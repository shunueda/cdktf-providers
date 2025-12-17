// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MappingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#aggregations MappingRule#aggregations}
  */
  readonly aggregations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#bucket_id MappingRule#bucket_id}
  */
  readonly bucketId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#drop MappingRule#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#drop_timestamp MappingRule#drop_timestamp}
  */
  readonly dropTimestamp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#filter MappingRule#filter}
  */
  readonly filter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#id MappingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#interval MappingRule#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#mode MappingRule#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#name MappingRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#slug MappingRule#slug}
  */
  readonly slug?: string;
  /**
  * storage_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#storage_policy MappingRule#storage_policy}
  */
  readonly storagePolicy?: MappingRuleStoragePolicy;
}
export interface MappingRuleStoragePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#resolution MappingRule#resolution}
  */
  readonly resolution: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#retention MappingRule#retention}
  */
  readonly retention: string;
}

export function mappingRuleStoragePolicyToTerraform(struct?: MappingRuleStoragePolicyOutputReference | MappingRuleStoragePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolution: cdktf.stringToTerraform(struct!.resolution),
    retention: cdktf.stringToTerraform(struct!.retention),
  }
}


export function mappingRuleStoragePolicyToHclTerraform(struct?: MappingRuleStoragePolicyOutputReference | MappingRuleStoragePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resolution: {
      value: cdktf.stringToHclTerraform(struct!.resolution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MappingRuleStoragePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MappingRuleStoragePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MappingRuleStoragePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resolution = undefined;
      this._retention = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resolution = value.resolution;
      this._retention = value.retention;
    }
  }

  // resolution - computed: false, optional: false, required: true
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // retention - computed: false, optional: false, required: true
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule chronosphere_mapping_rule}
*/
export class MappingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_mapping_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MappingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MappingRule to import
  * @param importFromId The id of the existing MappingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MappingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_mapping_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/mapping_rule chronosphere_mapping_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MappingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MappingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_mapping_rule',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.19.0',
        providerVersionConstraint: '1.19.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregations = config.aggregations;
    this._bucketId = config.bucketId;
    this._drop = config.drop;
    this._dropTimestamp = config.dropTimestamp;
    this._filter = config.filter;
    this._id = config.id;
    this._interval = config.interval;
    this._mode = config.mode;
    this._name = config.name;
    this._slug = config.slug;
    this._storagePolicy.internalValue = config.storagePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregations - computed: false, optional: true, required: false
  private _aggregations?: string[]; 
  public get aggregations() {
    return this.getListAttribute('aggregations');
  }
  public set aggregations(value: string[]) {
    this._aggregations = value;
  }
  public resetAggregations() {
    this._aggregations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations;
  }

  // bucket_id - computed: false, optional: true, required: false
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  public resetBucketId() {
    this._bucketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: boolean | cdktf.IResolvable; 
  public get drop() {
    return this.getBooleanAttribute('drop');
  }
  public set drop(value: boolean | cdktf.IResolvable) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_timestamp - computed: false, optional: true, required: false
  private _dropTimestamp?: boolean | cdktf.IResolvable; 
  public get dropTimestamp() {
    return this.getBooleanAttribute('drop_timestamp');
  }
  public set dropTimestamp(value: boolean | cdktf.IResolvable) {
    this._dropTimestamp = value;
  }
  public resetDropTimestamp() {
    this._dropTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropTimestampInput() {
    return this._dropTimestamp;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // storage_policy - computed: false, optional: true, required: false
  private _storagePolicy = new MappingRuleStoragePolicyOutputReference(this, "storage_policy");
  public get storagePolicy() {
    return this._storagePolicy;
  }
  public putStoragePolicy(value: MappingRuleStoragePolicy) {
    this._storagePolicy.internalValue = value;
  }
  public resetStoragePolicy() {
    this._storagePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyInput() {
    return this._storagePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aggregations),
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      drop: cdktf.booleanToTerraform(this._drop),
      drop_timestamp: cdktf.booleanToTerraform(this._dropTimestamp),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
      storage_policy: mappingRuleStoragePolicyToTerraform(this._storagePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aggregations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bucket_id: {
        value: cdktf.stringToHclTerraform(this._bucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop: {
        value: cdktf.booleanToHclTerraform(this._drop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drop_timestamp: {
        value: cdktf.booleanToHclTerraform(this._dropTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_policy: {
        value: mappingRuleStoragePolicyToHclTerraform(this._storagePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MappingRuleStoragePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
