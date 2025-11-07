// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/storagepool_tier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragepoolTierConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional parameter which adds new nodepools to the storagepool tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/storagepool_tier#children StoragepoolTier#children}
  */
  readonly children?: string[];
  /**
  * Specifies the storagepool tier name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/storagepool_tier#name StoragepoolTier#name}
  */
  readonly name: string;
  /**
  * Stop moving files to this tier when this limit is met
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/storagepool_tier#transfer_limit_pct StoragepoolTier#transfer_limit_pct}
  */
  readonly transferLimitPct?: number;
  /**
  * How the transfer limit value is being applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/storagepool_tier#transfer_limit_state StoragepoolTier#transfer_limit_state}
  */
  readonly transferLimitState?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/storagepool_tier powerscale_storagepool_tier}
*/
export class StoragepoolTier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_storagepool_tier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StoragepoolTier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StoragepoolTier to import
  * @param importFromId The id of the existing StoragepoolTier that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/storagepool_tier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StoragepoolTier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_storagepool_tier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/storagepool_tier powerscale_storagepool_tier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragepoolTierConfig
  */
  public constructor(scope: Construct, id: string, config: StoragepoolTierConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_storagepool_tier',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._children = config.children;
    this._name = config.name;
    this._transferLimitPct = config.transferLimitPct;
    this._transferLimitState = config.transferLimitState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // children - computed: true, optional: true, required: false
  private _children?: string[]; 
  public get children() {
    return cdktf.Fn.tolist(this.getListAttribute('children'));
  }
  public set children(value: string[]) {
    this._children = value;
  }
  public resetChildren() {
    this._children = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childrenInput() {
    return this._children;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // lnns - computed: true, optional: false, required: false
  public get lnns() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('lnns')));
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

  // transfer_limit_pct - computed: true, optional: true, required: false
  private _transferLimitPct?: number; 
  public get transferLimitPct() {
    return this.getNumberAttribute('transfer_limit_pct');
  }
  public set transferLimitPct(value: number) {
    this._transferLimitPct = value;
  }
  public resetTransferLimitPct() {
    this._transferLimitPct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferLimitPctInput() {
    return this._transferLimitPct;
  }

  // transfer_limit_state - computed: true, optional: true, required: false
  private _transferLimitState?: string; 
  public get transferLimitState() {
    return this.getStringAttribute('transfer_limit_state');
  }
  public set transferLimitState(value: string) {
    this._transferLimitState = value;
  }
  public resetTransferLimitState() {
    this._transferLimitState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferLimitStateInput() {
    return this._transferLimitState;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      children: cdktf.listMapper(cdktf.stringToTerraform, false)(this._children),
      name: cdktf.stringToTerraform(this._name),
      transfer_limit_pct: cdktf.numberToTerraform(this._transferLimitPct),
      transfer_limit_state: cdktf.stringToTerraform(this._transferLimitState),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      children: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._children),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transfer_limit_pct: {
        value: cdktf.numberToHclTerraform(this._transferLimitPct),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transfer_limit_state: {
        value: cdktf.stringToHclTerraform(this._transferLimitState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
