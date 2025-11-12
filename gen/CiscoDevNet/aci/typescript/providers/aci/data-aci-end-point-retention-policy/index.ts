// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciEndPointRetentionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy#annotation DataAciEndPointRetentionPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy#bounce_age_intvl DataAciEndPointRetentionPolicy#bounce_age_intvl}
  */
  readonly bounceAgeIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy#bounce_trig DataAciEndPointRetentionPolicy#bounce_trig}
  */
  readonly bounceTrig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy#description DataAciEndPointRetentionPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy#hold_intvl DataAciEndPointRetentionPolicy#hold_intvl}
  */
  readonly holdIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy#id DataAciEndPointRetentionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy#local_ep_age_intvl DataAciEndPointRetentionPolicy#local_ep_age_intvl}
  */
  readonly localEpAgeIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy#move_freq DataAciEndPointRetentionPolicy#move_freq}
  */
  readonly moveFreq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy#name DataAciEndPointRetentionPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy#name_alias DataAciEndPointRetentionPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy#remote_ep_age_intvl DataAciEndPointRetentionPolicy#remote_ep_age_intvl}
  */
  readonly remoteEpAgeIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy#tenant_dn DataAciEndPointRetentionPolicy#tenant_dn}
  */
  readonly tenantDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy aci_end_point_retention_policy}
*/
export class DataAciEndPointRetentionPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_end_point_retention_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciEndPointRetentionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciEndPointRetentionPolicy to import
  * @param importFromId The id of the existing DataAciEndPointRetentionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciEndPointRetentionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_end_point_retention_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/end_point_retention_policy aci_end_point_retention_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciEndPointRetentionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciEndPointRetentionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_end_point_retention_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._bounceAgeIntvl = config.bounceAgeIntvl;
    this._bounceTrig = config.bounceTrig;
    this._description = config.description;
    this._holdIntvl = config.holdIntvl;
    this._id = config.id;
    this._localEpAgeIntvl = config.localEpAgeIntvl;
    this._moveFreq = config.moveFreq;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._remoteEpAgeIntvl = config.remoteEpAgeIntvl;
    this._tenantDn = config.tenantDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // bounce_age_intvl - computed: true, optional: true, required: false
  private _bounceAgeIntvl?: string; 
  public get bounceAgeIntvl() {
    return this.getStringAttribute('bounce_age_intvl');
  }
  public set bounceAgeIntvl(value: string) {
    this._bounceAgeIntvl = value;
  }
  public resetBounceAgeIntvl() {
    this._bounceAgeIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceAgeIntvlInput() {
    return this._bounceAgeIntvl;
  }

  // bounce_trig - computed: true, optional: true, required: false
  private _bounceTrig?: string; 
  public get bounceTrig() {
    return this.getStringAttribute('bounce_trig');
  }
  public set bounceTrig(value: string) {
    this._bounceTrig = value;
  }
  public resetBounceTrig() {
    this._bounceTrig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceTrigInput() {
    return this._bounceTrig;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hold_intvl - computed: true, optional: true, required: false
  private _holdIntvl?: string; 
  public get holdIntvl() {
    return this.getStringAttribute('hold_intvl');
  }
  public set holdIntvl(value: string) {
    this._holdIntvl = value;
  }
  public resetHoldIntvl() {
    this._holdIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdIntvlInput() {
    return this._holdIntvl;
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

  // local_ep_age_intvl - computed: true, optional: true, required: false
  private _localEpAgeIntvl?: string; 
  public get localEpAgeIntvl() {
    return this.getStringAttribute('local_ep_age_intvl');
  }
  public set localEpAgeIntvl(value: string) {
    this._localEpAgeIntvl = value;
  }
  public resetLocalEpAgeIntvl() {
    this._localEpAgeIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localEpAgeIntvlInput() {
    return this._localEpAgeIntvl;
  }

  // move_freq - computed: true, optional: true, required: false
  private _moveFreq?: string; 
  public get moveFreq() {
    return this.getStringAttribute('move_freq');
  }
  public set moveFreq(value: string) {
    this._moveFreq = value;
  }
  public resetMoveFreq() {
    this._moveFreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveFreqInput() {
    return this._moveFreq;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // remote_ep_age_intvl - computed: true, optional: true, required: false
  private _remoteEpAgeIntvl?: string; 
  public get remoteEpAgeIntvl() {
    return this.getStringAttribute('remote_ep_age_intvl');
  }
  public set remoteEpAgeIntvl(value: string) {
    this._remoteEpAgeIntvl = value;
  }
  public resetRemoteEpAgeIntvl() {
    this._remoteEpAgeIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteEpAgeIntvlInput() {
    return this._remoteEpAgeIntvl;
  }

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      bounce_age_intvl: cdktf.stringToTerraform(this._bounceAgeIntvl),
      bounce_trig: cdktf.stringToTerraform(this._bounceTrig),
      description: cdktf.stringToTerraform(this._description),
      hold_intvl: cdktf.stringToTerraform(this._holdIntvl),
      id: cdktf.stringToTerraform(this._id),
      local_ep_age_intvl: cdktf.stringToTerraform(this._localEpAgeIntvl),
      move_freq: cdktf.stringToTerraform(this._moveFreq),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      remote_ep_age_intvl: cdktf.stringToTerraform(this._remoteEpAgeIntvl),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bounce_age_intvl: {
        value: cdktf.stringToHclTerraform(this._bounceAgeIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bounce_trig: {
        value: cdktf.stringToHclTerraform(this._bounceTrig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hold_intvl: {
        value: cdktf.stringToHclTerraform(this._holdIntvl),
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
      local_ep_age_intvl: {
        value: cdktf.stringToHclTerraform(this._localEpAgeIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      move_freq: {
        value: cdktf.stringToHclTerraform(this._moveFreq),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ep_age_intvl: {
        value: cdktf.stringToHclTerraform(this._remoteEpAgeIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
