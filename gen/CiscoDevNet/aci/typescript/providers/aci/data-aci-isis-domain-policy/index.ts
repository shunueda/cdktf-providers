// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciIsisDomainPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#annotation DataAciIsisDomainPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#description DataAciIsisDomainPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#id DataAciIsisDomainPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#isis_level_name DataAciIsisDomainPolicy#isis_level_name}
  */
  readonly isisLevelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#isis_level_type DataAciIsisDomainPolicy#isis_level_type}
  */
  readonly isisLevelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#lsp_fast_flood DataAciIsisDomainPolicy#lsp_fast_flood}
  */
  readonly lspFastFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#lsp_gen_init_intvl DataAciIsisDomainPolicy#lsp_gen_init_intvl}
  */
  readonly lspGenInitIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#lsp_gen_max_intvl DataAciIsisDomainPolicy#lsp_gen_max_intvl}
  */
  readonly lspGenMaxIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#lsp_gen_sec_intvl DataAciIsisDomainPolicy#lsp_gen_sec_intvl}
  */
  readonly lspGenSecIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#mtu DataAciIsisDomainPolicy#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#name_alias DataAciIsisDomainPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#redistrib_metric DataAciIsisDomainPolicy#redistrib_metric}
  */
  readonly redistribMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#spf_comp_init_intvl DataAciIsisDomainPolicy#spf_comp_init_intvl}
  */
  readonly spfCompInitIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#spf_comp_max_intvl DataAciIsisDomainPolicy#spf_comp_max_intvl}
  */
  readonly spfCompMaxIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#spf_comp_sec_intvl DataAciIsisDomainPolicy#spf_comp_sec_intvl}
  */
  readonly spfCompSecIntvl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy aci_isis_domain_policy}
*/
export class DataAciIsisDomainPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_isis_domain_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciIsisDomainPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciIsisDomainPolicy to import
  * @param importFromId The id of the existing DataAciIsisDomainPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciIsisDomainPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_isis_domain_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/isis_domain_policy aci_isis_domain_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciIsisDomainPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAciIsisDomainPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_isis_domain_policy',
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
    this._description = config.description;
    this._id = config.id;
    this._isisLevelName = config.isisLevelName;
    this._isisLevelType = config.isisLevelType;
    this._lspFastFlood = config.lspFastFlood;
    this._lspGenInitIntvl = config.lspGenInitIntvl;
    this._lspGenMaxIntvl = config.lspGenMaxIntvl;
    this._lspGenSecIntvl = config.lspGenSecIntvl;
    this._mtu = config.mtu;
    this._nameAlias = config.nameAlias;
    this._redistribMetric = config.redistribMetric;
    this._spfCompInitIntvl = config.spfCompInitIntvl;
    this._spfCompMaxIntvl = config.spfCompMaxIntvl;
    this._spfCompSecIntvl = config.spfCompSecIntvl;
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

  // isis_level_name - computed: true, optional: true, required: false
  private _isisLevelName?: string; 
  public get isisLevelName() {
    return this.getStringAttribute('isis_level_name');
  }
  public set isisLevelName(value: string) {
    this._isisLevelName = value;
  }
  public resetIsisLevelName() {
    this._isisLevelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisLevelNameInput() {
    return this._isisLevelName;
  }

  // isis_level_type - computed: true, optional: true, required: false
  private _isisLevelType?: string; 
  public get isisLevelType() {
    return this.getStringAttribute('isis_level_type');
  }
  public set isisLevelType(value: string) {
    this._isisLevelType = value;
  }
  public resetIsisLevelType() {
    this._isisLevelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisLevelTypeInput() {
    return this._isisLevelType;
  }

  // lsp_fast_flood - computed: true, optional: true, required: false
  private _lspFastFlood?: string; 
  public get lspFastFlood() {
    return this.getStringAttribute('lsp_fast_flood');
  }
  public set lspFastFlood(value: string) {
    this._lspFastFlood = value;
  }
  public resetLspFastFlood() {
    this._lspFastFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspFastFloodInput() {
    return this._lspFastFlood;
  }

  // lsp_gen_init_intvl - computed: true, optional: true, required: false
  private _lspGenInitIntvl?: string; 
  public get lspGenInitIntvl() {
    return this.getStringAttribute('lsp_gen_init_intvl');
  }
  public set lspGenInitIntvl(value: string) {
    this._lspGenInitIntvl = value;
  }
  public resetLspGenInitIntvl() {
    this._lspGenInitIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspGenInitIntvlInput() {
    return this._lspGenInitIntvl;
  }

  // lsp_gen_max_intvl - computed: true, optional: true, required: false
  private _lspGenMaxIntvl?: string; 
  public get lspGenMaxIntvl() {
    return this.getStringAttribute('lsp_gen_max_intvl');
  }
  public set lspGenMaxIntvl(value: string) {
    this._lspGenMaxIntvl = value;
  }
  public resetLspGenMaxIntvl() {
    this._lspGenMaxIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspGenMaxIntvlInput() {
    return this._lspGenMaxIntvl;
  }

  // lsp_gen_sec_intvl - computed: true, optional: true, required: false
  private _lspGenSecIntvl?: string; 
  public get lspGenSecIntvl() {
    return this.getStringAttribute('lsp_gen_sec_intvl');
  }
  public set lspGenSecIntvl(value: string) {
    this._lspGenSecIntvl = value;
  }
  public resetLspGenSecIntvl() {
    this._lspGenSecIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspGenSecIntvlInput() {
    return this._lspGenSecIntvl;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // redistrib_metric - computed: true, optional: true, required: false
  private _redistribMetric?: string; 
  public get redistribMetric() {
    return this.getStringAttribute('redistrib_metric');
  }
  public set redistribMetric(value: string) {
    this._redistribMetric = value;
  }
  public resetRedistribMetric() {
    this._redistribMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistribMetricInput() {
    return this._redistribMetric;
  }

  // spf_comp_init_intvl - computed: true, optional: true, required: false
  private _spfCompInitIntvl?: string; 
  public get spfCompInitIntvl() {
    return this.getStringAttribute('spf_comp_init_intvl');
  }
  public set spfCompInitIntvl(value: string) {
    this._spfCompInitIntvl = value;
  }
  public resetSpfCompInitIntvl() {
    this._spfCompInitIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfCompInitIntvlInput() {
    return this._spfCompInitIntvl;
  }

  // spf_comp_max_intvl - computed: true, optional: true, required: false
  private _spfCompMaxIntvl?: string; 
  public get spfCompMaxIntvl() {
    return this.getStringAttribute('spf_comp_max_intvl');
  }
  public set spfCompMaxIntvl(value: string) {
    this._spfCompMaxIntvl = value;
  }
  public resetSpfCompMaxIntvl() {
    this._spfCompMaxIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfCompMaxIntvlInput() {
    return this._spfCompMaxIntvl;
  }

  // spf_comp_sec_intvl - computed: true, optional: true, required: false
  private _spfCompSecIntvl?: string; 
  public get spfCompSecIntvl() {
    return this.getStringAttribute('spf_comp_sec_intvl');
  }
  public set spfCompSecIntvl(value: string) {
    this._spfCompSecIntvl = value;
  }
  public resetSpfCompSecIntvl() {
    this._spfCompSecIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfCompSecIntvlInput() {
    return this._spfCompSecIntvl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      isis_level_name: cdktf.stringToTerraform(this._isisLevelName),
      isis_level_type: cdktf.stringToTerraform(this._isisLevelType),
      lsp_fast_flood: cdktf.stringToTerraform(this._lspFastFlood),
      lsp_gen_init_intvl: cdktf.stringToTerraform(this._lspGenInitIntvl),
      lsp_gen_max_intvl: cdktf.stringToTerraform(this._lspGenMaxIntvl),
      lsp_gen_sec_intvl: cdktf.stringToTerraform(this._lspGenSecIntvl),
      mtu: cdktf.stringToTerraform(this._mtu),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      redistrib_metric: cdktf.stringToTerraform(this._redistribMetric),
      spf_comp_init_intvl: cdktf.stringToTerraform(this._spfCompInitIntvl),
      spf_comp_max_intvl: cdktf.stringToTerraform(this._spfCompMaxIntvl),
      spf_comp_sec_intvl: cdktf.stringToTerraform(this._spfCompSecIntvl),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      isis_level_name: {
        value: cdktf.stringToHclTerraform(this._isisLevelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isis_level_type: {
        value: cdktf.stringToHclTerraform(this._isisLevelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsp_fast_flood: {
        value: cdktf.stringToHclTerraform(this._lspFastFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsp_gen_init_intvl: {
        value: cdktf.stringToHclTerraform(this._lspGenInitIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsp_gen_max_intvl: {
        value: cdktf.stringToHclTerraform(this._lspGenMaxIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsp_gen_sec_intvl: {
        value: cdktf.stringToHclTerraform(this._lspGenSecIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
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
      redistrib_metric: {
        value: cdktf.stringToHclTerraform(this._redistribMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_comp_init_intvl: {
        value: cdktf.stringToHclTerraform(this._spfCompInitIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_comp_max_intvl: {
        value: cdktf.stringToHclTerraform(this._spfCompMaxIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_comp_sec_intvl: {
        value: cdktf.stringToHclTerraform(this._spfCompSecIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
