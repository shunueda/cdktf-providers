// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HsrpGroupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#annotation HsrpGroupPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#ctrl HsrpGroupPolicy#ctrl}
  */
  readonly ctrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#description HsrpGroupPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#hello_intvl HsrpGroupPolicy#hello_intvl}
  */
  readonly helloIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#hold_intvl HsrpGroupPolicy#hold_intvl}
  */
  readonly holdIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#hsrp_group_policy_type HsrpGroupPolicy#hsrp_group_policy_type}
  */
  readonly hsrpGroupPolicyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#id HsrpGroupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#key HsrpGroupPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#name HsrpGroupPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#name_alias HsrpGroupPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#preempt_delay_min HsrpGroupPolicy#preempt_delay_min}
  */
  readonly preemptDelayMin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#preempt_delay_reload HsrpGroupPolicy#preempt_delay_reload}
  */
  readonly preemptDelayReload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#preempt_delay_sync HsrpGroupPolicy#preempt_delay_sync}
  */
  readonly preemptDelaySync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#prio HsrpGroupPolicy#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#tenant_dn HsrpGroupPolicy#tenant_dn}
  */
  readonly tenantDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#timeout HsrpGroupPolicy#timeout}
  */
  readonly timeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy aci_hsrp_group_policy}
*/
export class HsrpGroupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_hsrp_group_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HsrpGroupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HsrpGroupPolicy to import
  * @param importFromId The id of the existing HsrpGroupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HsrpGroupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_hsrp_group_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/hsrp_group_policy aci_hsrp_group_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HsrpGroupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: HsrpGroupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_hsrp_group_policy',
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
    this._ctrl = config.ctrl;
    this._description = config.description;
    this._helloIntvl = config.helloIntvl;
    this._holdIntvl = config.holdIntvl;
    this._hsrpGroupPolicyType = config.hsrpGroupPolicyType;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._preemptDelayMin = config.preemptDelayMin;
    this._preemptDelayReload = config.preemptDelayReload;
    this._preemptDelaySync = config.preemptDelaySync;
    this._prio = config.prio;
    this._tenantDn = config.tenantDn;
    this._timeout = config.timeout;
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

  // ctrl - computed: true, optional: true, required: false
  private _ctrl?: string; 
  public get ctrl() {
    return this.getStringAttribute('ctrl');
  }
  public set ctrl(value: string) {
    this._ctrl = value;
  }
  public resetCtrl() {
    this._ctrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlInput() {
    return this._ctrl;
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

  // hello_intvl - computed: true, optional: true, required: false
  private _helloIntvl?: string; 
  public get helloIntvl() {
    return this.getStringAttribute('hello_intvl');
  }
  public set helloIntvl(value: string) {
    this._helloIntvl = value;
  }
  public resetHelloIntvl() {
    this._helloIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntvlInput() {
    return this._helloIntvl;
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

  // hsrp_group_policy_type - computed: true, optional: true, required: false
  private _hsrpGroupPolicyType?: string; 
  public get hsrpGroupPolicyType() {
    return this.getStringAttribute('hsrp_group_policy_type');
  }
  public set hsrpGroupPolicyType(value: string) {
    this._hsrpGroupPolicyType = value;
  }
  public resetHsrpGroupPolicyType() {
    this._hsrpGroupPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsrpGroupPolicyTypeInput() {
    return this._hsrpGroupPolicyType;
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // preempt_delay_min - computed: true, optional: true, required: false
  private _preemptDelayMin?: string; 
  public get preemptDelayMin() {
    return this.getStringAttribute('preempt_delay_min');
  }
  public set preemptDelayMin(value: string) {
    this._preemptDelayMin = value;
  }
  public resetPreemptDelayMin() {
    this._preemptDelayMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptDelayMinInput() {
    return this._preemptDelayMin;
  }

  // preempt_delay_reload - computed: true, optional: true, required: false
  private _preemptDelayReload?: string; 
  public get preemptDelayReload() {
    return this.getStringAttribute('preempt_delay_reload');
  }
  public set preemptDelayReload(value: string) {
    this._preemptDelayReload = value;
  }
  public resetPreemptDelayReload() {
    this._preemptDelayReload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptDelayReloadInput() {
    return this._preemptDelayReload;
  }

  // preempt_delay_sync - computed: true, optional: true, required: false
  private _preemptDelaySync?: string; 
  public get preemptDelaySync() {
    return this.getStringAttribute('preempt_delay_sync');
  }
  public set preemptDelaySync(value: string) {
    this._preemptDelaySync = value;
  }
  public resetPreemptDelaySync() {
    this._preemptDelaySync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptDelaySyncInput() {
    return this._preemptDelaySync;
  }

  // prio - computed: true, optional: true, required: false
  private _prio?: string; 
  public get prio() {
    return this.getStringAttribute('prio');
  }
  public set prio(value: string) {
    this._prio = value;
  }
  public resetPrio() {
    this._prio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioInput() {
    return this._prio;
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

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      ctrl: cdktf.stringToTerraform(this._ctrl),
      description: cdktf.stringToTerraform(this._description),
      hello_intvl: cdktf.stringToTerraform(this._helloIntvl),
      hold_intvl: cdktf.stringToTerraform(this._holdIntvl),
      hsrp_group_policy_type: cdktf.stringToTerraform(this._hsrpGroupPolicyType),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      preempt_delay_min: cdktf.stringToTerraform(this._preemptDelayMin),
      preempt_delay_reload: cdktf.stringToTerraform(this._preemptDelayReload),
      preempt_delay_sync: cdktf.stringToTerraform(this._preemptDelaySync),
      prio: cdktf.stringToTerraform(this._prio),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      timeout: cdktf.stringToTerraform(this._timeout),
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
      ctrl: {
        value: cdktf.stringToHclTerraform(this._ctrl),
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
      hello_intvl: {
        value: cdktf.stringToHclTerraform(this._helloIntvl),
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
      hsrp_group_policy_type: {
        value: cdktf.stringToHclTerraform(this._hsrpGroupPolicyType),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      preempt_delay_min: {
        value: cdktf.stringToHclTerraform(this._preemptDelayMin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preempt_delay_reload: {
        value: cdktf.stringToHclTerraform(this._preemptDelayReload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preempt_delay_sync: {
        value: cdktf.stringToHclTerraform(this._preemptDelaySync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prio: {
        value: cdktf.stringToHclTerraform(this._prio),
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
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
