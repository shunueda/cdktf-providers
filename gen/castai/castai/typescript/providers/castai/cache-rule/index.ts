// https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CacheRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cache configuration this rule belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule#cache_configuration_id CacheRule#cache_configuration_id}
  */
  readonly cacheConfigurationId: string;
  /**
  * ID of the cache group this rule belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule#cache_group_id CacheRule#cache_group_id}
  */
  readonly cacheGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule#id CacheRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * TTL in seconds. Required when mode is Manual.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule#manual_ttl CacheRule#manual_ttl}
  */
  readonly manualTtl?: number;
  /**
  * TTL mode for queries matching this rule. Valid values: Auto, DontCache, Manual.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule#mode CacheRule#mode}
  */
  readonly mode: string;
  /**
  * Database table name to apply this rule to. Either table or template_hash must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule#table CacheRule#table}
  */
  readonly table?: string;
  /**
  * Hash of the query template. Either table or template_hash must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule#template_hash CacheRule#template_hash}
  */
  readonly templateHash?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule#timeouts CacheRule#timeouts}
  */
  readonly timeouts?: CacheRuleTimeouts;
}
export interface CacheRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule#create CacheRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule#delete CacheRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule#read CacheRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule#update CacheRule#update}
  */
  readonly update?: string;
}

export function cacheRuleTimeoutsToTerraform(struct?: CacheRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cacheRuleTimeoutsToHclTerraform(struct?: CacheRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CacheRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CacheRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CacheRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule castai_cache_rule}
*/
export class CacheRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_cache_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CacheRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CacheRule to import
  * @param importFromId The id of the existing CacheRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CacheRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_cache_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/cache_rule castai_cache_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CacheRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CacheRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_cache_rule',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.6.0',
        providerVersionConstraint: '8.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheConfigurationId = config.cacheConfigurationId;
    this._cacheGroupId = config.cacheGroupId;
    this._id = config.id;
    this._manualTtl = config.manualTtl;
    this._mode = config.mode;
    this._table = config.table;
    this._templateHash = config.templateHash;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_configuration_id - computed: false, optional: false, required: true
  private _cacheConfigurationId?: string; 
  public get cacheConfigurationId() {
    return this.getStringAttribute('cache_configuration_id');
  }
  public set cacheConfigurationId(value: string) {
    this._cacheConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheConfigurationIdInput() {
    return this._cacheConfigurationId;
  }

  // cache_group_id - computed: false, optional: false, required: true
  private _cacheGroupId?: string; 
  public get cacheGroupId() {
    return this.getStringAttribute('cache_group_id');
  }
  public set cacheGroupId(value: string) {
    this._cacheGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheGroupIdInput() {
    return this._cacheGroupId;
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

  // manual_ttl - computed: false, optional: true, required: false
  private _manualTtl?: number; 
  public get manualTtl() {
    return this.getNumberAttribute('manual_ttl');
  }
  public set manualTtl(value: number) {
    this._manualTtl = value;
  }
  public resetManualTtl() {
    this._manualTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualTtlInput() {
    return this._manualTtl;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // template_hash - computed: false, optional: true, required: false
  private _templateHash?: string; 
  public get templateHash() {
    return this.getStringAttribute('template_hash');
  }
  public set templateHash(value: string) {
    this._templateHash = value;
  }
  public resetTemplateHash() {
    this._templateHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateHashInput() {
    return this._templateHash;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CacheRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CacheRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_configuration_id: cdktf.stringToTerraform(this._cacheConfigurationId),
      cache_group_id: cdktf.stringToTerraform(this._cacheGroupId),
      id: cdktf.stringToTerraform(this._id),
      manual_ttl: cdktf.numberToTerraform(this._manualTtl),
      mode: cdktf.stringToTerraform(this._mode),
      table: cdktf.stringToTerraform(this._table),
      template_hash: cdktf.stringToTerraform(this._templateHash),
      timeouts: cacheRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_configuration_id: {
        value: cdktf.stringToHclTerraform(this._cacheConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_group_id: {
        value: cdktf.stringToHclTerraform(this._cacheGroupId),
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
      manual_ttl: {
        value: cdktf.numberToHclTerraform(this._manualTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table: {
        value: cdktf.stringToHclTerraform(this._table),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_hash: {
        value: cdktf.stringToHclTerraform(this._templateHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cacheRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CacheRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
