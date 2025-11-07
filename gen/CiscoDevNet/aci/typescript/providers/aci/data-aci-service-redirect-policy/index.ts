// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciServiceRedirectPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#annotation DataAciServiceRedirectPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#anycast_enabled DataAciServiceRedirectPolicy#anycast_enabled}
  */
  readonly anycastEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#description DataAciServiceRedirectPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#dest_type DataAciServiceRedirectPolicy#dest_type}
  */
  readonly destType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#hashing_algorithm DataAciServiceRedirectPolicy#hashing_algorithm}
  */
  readonly hashingAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#id DataAciServiceRedirectPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#max_threshold_percent DataAciServiceRedirectPolicy#max_threshold_percent}
  */
  readonly maxThresholdPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#min_threshold_percent DataAciServiceRedirectPolicy#min_threshold_percent}
  */
  readonly minThresholdPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#name DataAciServiceRedirectPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#name_alias DataAciServiceRedirectPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#program_local_pod_only DataAciServiceRedirectPolicy#program_local_pod_only}
  */
  readonly programLocalPodOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#resilient_hash_enabled DataAciServiceRedirectPolicy#resilient_hash_enabled}
  */
  readonly resilientHashEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#tenant_dn DataAciServiceRedirectPolicy#tenant_dn}
  */
  readonly tenantDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#threshold_down_action DataAciServiceRedirectPolicy#threshold_down_action}
  */
  readonly thresholdDownAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#threshold_enable DataAciServiceRedirectPolicy#threshold_enable}
  */
  readonly thresholdEnable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy aci_service_redirect_policy}
*/
export class DataAciServiceRedirectPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_service_redirect_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciServiceRedirectPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciServiceRedirectPolicy to import
  * @param importFromId The id of the existing DataAciServiceRedirectPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciServiceRedirectPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_service_redirect_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/service_redirect_policy aci_service_redirect_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciServiceRedirectPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciServiceRedirectPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_service_redirect_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
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
    this._anycastEnabled = config.anycastEnabled;
    this._description = config.description;
    this._destType = config.destType;
    this._hashingAlgorithm = config.hashingAlgorithm;
    this._id = config.id;
    this._maxThresholdPercent = config.maxThresholdPercent;
    this._minThresholdPercent = config.minThresholdPercent;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._programLocalPodOnly = config.programLocalPodOnly;
    this._resilientHashEnabled = config.resilientHashEnabled;
    this._tenantDn = config.tenantDn;
    this._thresholdDownAction = config.thresholdDownAction;
    this._thresholdEnable = config.thresholdEnable;
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

  // anycast_enabled - computed: true, optional: true, required: false
  private _anycastEnabled?: string; 
  public get anycastEnabled() {
    return this.getStringAttribute('anycast_enabled');
  }
  public set anycastEnabled(value: string) {
    this._anycastEnabled = value;
  }
  public resetAnycastEnabled() {
    this._anycastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastEnabledInput() {
    return this._anycastEnabled;
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

  // dest_type - computed: true, optional: true, required: false
  private _destType?: string; 
  public get destType() {
    return this.getStringAttribute('dest_type');
  }
  public set destType(value: string) {
    this._destType = value;
  }
  public resetDestType() {
    this._destType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destTypeInput() {
    return this._destType;
  }

  // hashing_algorithm - computed: true, optional: true, required: false
  private _hashingAlgorithm?: string; 
  public get hashingAlgorithm() {
    return this.getStringAttribute('hashing_algorithm');
  }
  public set hashingAlgorithm(value: string) {
    this._hashingAlgorithm = value;
  }
  public resetHashingAlgorithm() {
    this._hashingAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashingAlgorithmInput() {
    return this._hashingAlgorithm;
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

  // max_threshold_percent - computed: true, optional: true, required: false
  private _maxThresholdPercent?: string; 
  public get maxThresholdPercent() {
    return this.getStringAttribute('max_threshold_percent');
  }
  public set maxThresholdPercent(value: string) {
    this._maxThresholdPercent = value;
  }
  public resetMaxThresholdPercent() {
    this._maxThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThresholdPercentInput() {
    return this._maxThresholdPercent;
  }

  // min_threshold_percent - computed: true, optional: true, required: false
  private _minThresholdPercent?: string; 
  public get minThresholdPercent() {
    return this.getStringAttribute('min_threshold_percent');
  }
  public set minThresholdPercent(value: string) {
    this._minThresholdPercent = value;
  }
  public resetMinThresholdPercent() {
    this._minThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minThresholdPercentInput() {
    return this._minThresholdPercent;
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

  // program_local_pod_only - computed: true, optional: true, required: false
  private _programLocalPodOnly?: string; 
  public get programLocalPodOnly() {
    return this.getStringAttribute('program_local_pod_only');
  }
  public set programLocalPodOnly(value: string) {
    this._programLocalPodOnly = value;
  }
  public resetProgramLocalPodOnly() {
    this._programLocalPodOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programLocalPodOnlyInput() {
    return this._programLocalPodOnly;
  }

  // resilient_hash_enabled - computed: true, optional: true, required: false
  private _resilientHashEnabled?: string; 
  public get resilientHashEnabled() {
    return this.getStringAttribute('resilient_hash_enabled');
  }
  public set resilientHashEnabled(value: string) {
    this._resilientHashEnabled = value;
  }
  public resetResilientHashEnabled() {
    this._resilientHashEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resilientHashEnabledInput() {
    return this._resilientHashEnabled;
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

  // threshold_down_action - computed: true, optional: true, required: false
  private _thresholdDownAction?: string; 
  public get thresholdDownAction() {
    return this.getStringAttribute('threshold_down_action');
  }
  public set thresholdDownAction(value: string) {
    this._thresholdDownAction = value;
  }
  public resetThresholdDownAction() {
    this._thresholdDownAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdDownActionInput() {
    return this._thresholdDownAction;
  }

  // threshold_enable - computed: true, optional: true, required: false
  private _thresholdEnable?: string; 
  public get thresholdEnable() {
    return this.getStringAttribute('threshold_enable');
  }
  public set thresholdEnable(value: string) {
    this._thresholdEnable = value;
  }
  public resetThresholdEnable() {
    this._thresholdEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdEnableInput() {
    return this._thresholdEnable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      anycast_enabled: cdktf.stringToTerraform(this._anycastEnabled),
      description: cdktf.stringToTerraform(this._description),
      dest_type: cdktf.stringToTerraform(this._destType),
      hashing_algorithm: cdktf.stringToTerraform(this._hashingAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      max_threshold_percent: cdktf.stringToTerraform(this._maxThresholdPercent),
      min_threshold_percent: cdktf.stringToTerraform(this._minThresholdPercent),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      program_local_pod_only: cdktf.stringToTerraform(this._programLocalPodOnly),
      resilient_hash_enabled: cdktf.stringToTerraform(this._resilientHashEnabled),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      threshold_down_action: cdktf.stringToTerraform(this._thresholdDownAction),
      threshold_enable: cdktf.stringToTerraform(this._thresholdEnable),
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
      anycast_enabled: {
        value: cdktf.stringToHclTerraform(this._anycastEnabled),
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
      dest_type: {
        value: cdktf.stringToHclTerraform(this._destType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hashing_algorithm: {
        value: cdktf.stringToHclTerraform(this._hashingAlgorithm),
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
      max_threshold_percent: {
        value: cdktf.stringToHclTerraform(this._maxThresholdPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_threshold_percent: {
        value: cdktf.stringToHclTerraform(this._minThresholdPercent),
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
      program_local_pod_only: {
        value: cdktf.stringToHclTerraform(this._programLocalPodOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resilient_hash_enabled: {
        value: cdktf.stringToHclTerraform(this._resilientHashEnabled),
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
      threshold_down_action: {
        value: cdktf.stringToHclTerraform(this._thresholdDownAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_enable: {
        value: cdktf.stringToHclTerraform(this._thresholdEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
