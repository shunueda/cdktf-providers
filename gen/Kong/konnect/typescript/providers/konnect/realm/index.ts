// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/realm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RealmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow all control planes to use the realm. When this value is set it takes precedence on `allowed_control_planes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/realm#allow_all_control_planes Realm#allow_all_control_planes}
  */
  readonly allowAllControlPlanes?: boolean | cdktf.IResolvable;
  /**
  * List of control plane ids that are allowed to use the realm. This is used when `allow_all_control_planes` value
  * is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/realm#allowed_control_planes Realm#allowed_control_planes}
  */
  readonly allowedControlPlanes?: string[];
  /**
  * A list of consumer groups to automatically add to any consumers created within this Realm.
  * If `consumer_groups` are provided on the Consumer object _and_ on the Realm, the Consumer will be placed in all defined consumer groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/realm#consumer_groups Realm#consumer_groups}
  */
  readonly consumerGroups?: string[];
  /**
  * If set to "true", the realm and all consumers and credentials will be deleted when running `terraform destroy`.
  * If set to "false", the realm will not be deleted until all child entities are manually removed.
  * This will IRREVERSIBLY DELETE ALL REGISTERED CONSUMERS AND THEIR CREDENTIALS. Only set to "true" if you want this behavior.
  * Default: "false"; must be one of ["true", "false"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/realm#force_destroy Realm#force_destroy}
  */
  readonly forceDestroy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/realm#name Realm#name}
  */
  readonly name: string;
  /**
  * If a running Gateway triggers a lookup for a Consumer that cannot be authenticated this realm, a `negative_ttl`
  * is set. The Gateway will not try to lookup the Consumer in Konnect for `negative_ttl` minutes.
  * 
  * A Consumer will be cached for `negative_ttl` if they do not exist in the Realm, or if the provided credentials
  * are invalid.
  * Default: 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/realm#negative_ttl Realm#negative_ttl}
  */
  readonly negativeTtl?: number;
  /**
  * The time in minutes that the Consumer will be cached in memory on a running Gateway if it is
  * successfully loaded from Konnect.
  * Default: 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/realm#ttl Realm#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/realm konnect_realm}
*/
export class Realm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_realm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Realm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Realm to import
  * @param importFromId The id of the existing Realm that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/realm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Realm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_realm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/realm konnect_realm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RealmConfig
  */
  public constructor(scope: Construct, id: string, config: RealmConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_realm',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAllControlPlanes = config.allowAllControlPlanes;
    this._allowedControlPlanes = config.allowedControlPlanes;
    this._consumerGroups = config.consumerGroups;
    this._forceDestroy = config.forceDestroy;
    this._name = config.name;
    this._negativeTtl = config.negativeTtl;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_all_control_planes - computed: true, optional: true, required: false
  private _allowAllControlPlanes?: boolean | cdktf.IResolvable; 
  public get allowAllControlPlanes() {
    return this.getBooleanAttribute('allow_all_control_planes');
  }
  public set allowAllControlPlanes(value: boolean | cdktf.IResolvable) {
    this._allowAllControlPlanes = value;
  }
  public resetAllowAllControlPlanes() {
    this._allowAllControlPlanes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllControlPlanesInput() {
    return this._allowAllControlPlanes;
  }

  // allowed_control_planes - computed: true, optional: true, required: false
  private _allowedControlPlanes?: string[]; 
  public get allowedControlPlanes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_control_planes'));
  }
  public set allowedControlPlanes(value: string[]) {
    this._allowedControlPlanes = value;
  }
  public resetAllowedControlPlanes() {
    this._allowedControlPlanes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedControlPlanesInput() {
    return this._allowedControlPlanes;
  }

  // consumer_groups - computed: true, optional: true, required: false
  private _consumerGroups?: string[]; 
  public get consumerGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('consumer_groups'));
  }
  public set consumerGroups(value: string[]) {
    this._consumerGroups = value;
  }
  public resetConsumerGroups() {
    this._consumerGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupsInput() {
    return this._consumerGroups;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // force_destroy - computed: true, optional: true, required: false
  private _forceDestroy?: string; 
  public get forceDestroy() {
    return this.getStringAttribute('force_destroy');
  }
  public set forceDestroy(value: string) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // negative_ttl - computed: true, optional: true, required: false
  private _negativeTtl?: number; 
  public get negativeTtl() {
    return this.getNumberAttribute('negative_ttl');
  }
  public set negativeTtl(value: number) {
    this._negativeTtl = value;
  }
  public resetNegativeTtl() {
    this._negativeTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeTtlInput() {
    return this._negativeTtl;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_all_control_planes: cdktf.booleanToTerraform(this._allowAllControlPlanes),
      allowed_control_planes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedControlPlanes),
      consumer_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._consumerGroups),
      force_destroy: cdktf.stringToTerraform(this._forceDestroy),
      name: cdktf.stringToTerraform(this._name),
      negative_ttl: cdktf.numberToTerraform(this._negativeTtl),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_all_control_planes: {
        value: cdktf.booleanToHclTerraform(this._allowAllControlPlanes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_control_planes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedControlPlanes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      consumer_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._consumerGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      force_destroy: {
        value: cdktf.stringToHclTerraform(this._forceDestroy),
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
      negative_ttl: {
        value: cdktf.numberToHclTerraform(this._negativeTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
