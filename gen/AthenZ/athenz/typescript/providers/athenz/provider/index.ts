// https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AthenzProviderConfig {
  /**
  * CA Certificate file path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs#cacert AthenzProvider#cacert}
  */
  readonly cacert?: string;
  /**
  * Athenz client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs#cert AthenzProvider#cert}
  */
  readonly cert?: string;
  /**
  * Disable resource ownership feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs#disable_resource_ownership AthenzProvider#disable_resource_ownership}
  */
  readonly disableResourceOwnership?: boolean | cdktf.IResolvable;
  /**
  * Default state for athenz_group_meta resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs#group_meta_resource_state AthenzProvider#group_meta_resource_state}
  */
  readonly groupMetaResourceState?: number;
  /**
  * Athenz client key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs#key AthenzProvider#key}
  */
  readonly key?: string;
  /**
  * Resource Owner Identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs#resource_owner AthenzProvider#resource_owner}
  */
  readonly resourceOwner?: string;
  /**
  * Default state for athenz_role_meta resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs#role_meta_resource_state AthenzProvider#role_meta_resource_state}
  */
  readonly roleMetaResourceState?: number;
  /**
  * Athenz API URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs#zms_url AthenzProvider#zms_url}
  */
  readonly zmsUrl: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs#alias AthenzProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs athenz}
*/
export class AthenzProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "athenz";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AthenzProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AthenzProvider to import
  * @param importFromId The id of the existing AthenzProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AthenzProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "athenz", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs athenz} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AthenzProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AthenzProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'athenz',
      terraformGeneratorMetadata: {
        providerName: 'athenz',
        providerVersion: '1.0.49',
        providerVersionConstraint: '1.0.49'
      },
      terraformProviderSource: 'AthenZ/athenz'
    });
    this._cacert = config.cacert;
    this._cert = config.cert;
    this._disableResourceOwnership = config.disableResourceOwnership;
    this._groupMetaResourceState = config.groupMetaResourceState;
    this._key = config.key;
    this._resourceOwner = config.resourceOwner;
    this._roleMetaResourceState = config.roleMetaResourceState;
    this._zmsUrl = config.zmsUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cacert - computed: false, optional: true, required: false
  private _cacert?: string; 
  public get cacert() {
    return this._cacert;
  }
  public set cacert(value: string | undefined) {
    this._cacert = value;
  }
  public resetCacert() {
    this._cacert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertInput() {
    return this._cacert;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this._cert;
  }
  public set cert(value: string | undefined) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // disable_resource_ownership - computed: false, optional: true, required: false
  private _disableResourceOwnership?: boolean | cdktf.IResolvable; 
  public get disableResourceOwnership() {
    return this._disableResourceOwnership;
  }
  public set disableResourceOwnership(value: boolean | cdktf.IResolvable | undefined) {
    this._disableResourceOwnership = value;
  }
  public resetDisableResourceOwnership() {
    this._disableResourceOwnership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResourceOwnershipInput() {
    return this._disableResourceOwnership;
  }

  // group_meta_resource_state - computed: false, optional: true, required: false
  private _groupMetaResourceState?: number; 
  public get groupMetaResourceState() {
    return this._groupMetaResourceState;
  }
  public set groupMetaResourceState(value: number | undefined) {
    this._groupMetaResourceState = value;
  }
  public resetGroupMetaResourceState() {
    this._groupMetaResourceState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMetaResourceStateInput() {
    return this._groupMetaResourceState;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this._key;
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // resource_owner - computed: false, optional: true, required: false
  private _resourceOwner?: string; 
  public get resourceOwner() {
    return this._resourceOwner;
  }
  public set resourceOwner(value: string | undefined) {
    this._resourceOwner = value;
  }
  public resetResourceOwner() {
    this._resourceOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOwnerInput() {
    return this._resourceOwner;
  }

  // role_meta_resource_state - computed: false, optional: true, required: false
  private _roleMetaResourceState?: number; 
  public get roleMetaResourceState() {
    return this._roleMetaResourceState;
  }
  public set roleMetaResourceState(value: number | undefined) {
    this._roleMetaResourceState = value;
  }
  public resetRoleMetaResourceState() {
    this._roleMetaResourceState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleMetaResourceStateInput() {
    return this._roleMetaResourceState;
  }

  // zms_url - computed: false, optional: false, required: true
  private _zmsUrl?: string; 
  public get zmsUrl() {
    return this._zmsUrl;
  }
  public set zmsUrl(value: string | undefined) {
    this._zmsUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zmsUrlInput() {
    return this._zmsUrl;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cacert: cdktf.stringToTerraform(this._cacert),
      cert: cdktf.stringToTerraform(this._cert),
      disable_resource_ownership: cdktf.booleanToTerraform(this._disableResourceOwnership),
      group_meta_resource_state: cdktf.numberToTerraform(this._groupMetaResourceState),
      key: cdktf.stringToTerraform(this._key),
      resource_owner: cdktf.stringToTerraform(this._resourceOwner),
      role_meta_resource_state: cdktf.numberToTerraform(this._roleMetaResourceState),
      zms_url: cdktf.stringToTerraform(this._zmsUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cacert: {
        value: cdktf.stringToHclTerraform(this._cacert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_resource_ownership: {
        value: cdktf.booleanToHclTerraform(this._disableResourceOwnership),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_meta_resource_state: {
        value: cdktf.numberToHclTerraform(this._groupMetaResourceState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_owner: {
        value: cdktf.stringToHclTerraform(this._resourceOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_meta_resource_state: {
        value: cdktf.numberToHclTerraform(this._roleMetaResourceState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zms_url: {
        value: cdktf.stringToHclTerraform(this._zmsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
