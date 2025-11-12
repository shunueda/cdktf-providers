// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementHttpsRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Rule inspect level. "Bypass" or "Inspect".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#action ManagementHttpsRule#action}
  */
  readonly action?: string;
  /**
  * Blades for HTTPS Inspection. Identified by Name or UID to enable the inspection for. "Anti Bot","Anti Virus","Application Control","Data Awareness","DLP","IPS","Threat Emulation","Url Filtering".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#blade ManagementHttpsRule#blade}
  */
  readonly blade?: string[];
  /**
  * Internal Server Certificate identified by Name or UID, otherwise, "Outbound Certificate" is a default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#certificate ManagementHttpsRule#certificate}
  */
  readonly certificate?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#comments ManagementHttpsRule#comments}
  */
  readonly comments?: string;
  /**
  * Collection of Network objects identified by Name or UID that represents connection destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#destination ManagementHttpsRule#destination}
  */
  readonly destination?: string[];
  /**
  * TRUE if "negate" value is set for Destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#destination_negate ManagementHttpsRule#destination_negate}
  */
  readonly destinationNegate?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#enabled ManagementHttpsRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#id ManagementHttpsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#ignore_errors ManagementHttpsRule#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#ignore_warnings ManagementHttpsRule#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Which Gateways identified by the name or UID to install the policy on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#install_on ManagementHttpsRule#install_on}
  */
  readonly installOn?: string[];
  /**
  * Layer that holds the Object. Identified by the Name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#layer ManagementHttpsRule#layer}
  */
  readonly layer: string;
  /**
  * HTTPS rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#name ManagementHttpsRule#name}
  */
  readonly name?: string;
  /**
  * Position in the rulebase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#position ManagementHttpsRule#position}
  */
  readonly position: { [key: string]: string };
  /**
  * Collection of Network objects identified by Name or UID that represents connection service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#service ManagementHttpsRule#service}
  */
  readonly service?: string[];
  /**
  * TRUE if "negate" value is set for Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#service_negate ManagementHttpsRule#service_negate}
  */
  readonly serviceNegate?: boolean | cdktf.IResolvable;
  /**
  * Collection of Site Categories objects identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#site_category ManagementHttpsRule#site_category}
  */
  readonly siteCategory?: string[];
  /**
  * TRUE if "negate" value is set for Site Category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#site_category_negate ManagementHttpsRule#site_category_negate}
  */
  readonly siteCategoryNegate?: boolean | cdktf.IResolvable;
  /**
  * Collection of Network objects identified by Name or UID that represents connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#source ManagementHttpsRule#source}
  */
  readonly source?: string[];
  /**
  * TRUE if "negate" value is set for Source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#source_negate ManagementHttpsRule#source_negate}
  */
  readonly sourceNegate?: boolean | cdktf.IResolvable;
  /**
  * "None","Log","Alert","Mail","SNMP trap","Mail","User Alert", "User Alert 2", "User Alert 3".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#track ManagementHttpsRule#track}
  */
  readonly track?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule checkpoint_management_https_rule}
*/
export class ManagementHttpsRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_https_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementHttpsRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementHttpsRule to import
  * @param importFromId The id of the existing ManagementHttpsRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementHttpsRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_https_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_https_rule checkpoint_management_https_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementHttpsRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementHttpsRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_https_rule',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._blade = config.blade;
    this._certificate = config.certificate;
    this._comments = config.comments;
    this._destination = config.destination;
    this._destinationNegate = config.destinationNegate;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._installOn = config.installOn;
    this._layer = config.layer;
    this._name = config.name;
    this._position = config.position;
    this._service = config.service;
    this._serviceNegate = config.serviceNegate;
    this._siteCategory = config.siteCategory;
    this._siteCategoryNegate = config.siteCategoryNegate;
    this._source = config.source;
    this._sourceNegate = config.sourceNegate;
    this._track = config.track;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // blade - computed: false, optional: true, required: false
  private _blade?: string[]; 
  public get blade() {
    return cdktf.Fn.tolist(this.getListAttribute('blade'));
  }
  public set blade(value: string[]) {
    this._blade = value;
  }
  public resetBlade() {
    this._blade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeInput() {
    return this._blade;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string[]; 
  public get destination() {
    return cdktf.Fn.tolist(this.getListAttribute('destination'));
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_negate - computed: false, optional: true, required: false
  private _destinationNegate?: boolean | cdktf.IResolvable; 
  public get destinationNegate() {
    return this.getBooleanAttribute('destination_negate');
  }
  public set destinationNegate(value: boolean | cdktf.IResolvable) {
    this._destinationNegate = value;
  }
  public resetDestinationNegate() {
    this._destinationNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNegateInput() {
    return this._destinationNegate;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // install_on - computed: false, optional: true, required: false
  private _installOn?: string[]; 
  public get installOn() {
    return cdktf.Fn.tolist(this.getListAttribute('install_on'));
  }
  public set installOn(value: string[]) {
    this._installOn = value;
  }
  public resetInstallOn() {
    this._installOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installOnInput() {
    return this._installOn;
  }

  // layer - computed: false, optional: false, required: true
  private _layer?: string; 
  public get layer() {
    return this.getStringAttribute('layer');
  }
  public set layer(value: string) {
    this._layer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // position - computed: false, optional: false, required: true
  private _position?: { [key: string]: string }; 
  public get position() {
    return this.getStringMapAttribute('position');
  }
  public set position(value: { [key: string]: string }) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_negate - computed: false, optional: true, required: false
  private _serviceNegate?: boolean | cdktf.IResolvable; 
  public get serviceNegate() {
    return this.getBooleanAttribute('service_negate');
  }
  public set serviceNegate(value: boolean | cdktf.IResolvable) {
    this._serviceNegate = value;
  }
  public resetServiceNegate() {
    this._serviceNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNegateInput() {
    return this._serviceNegate;
  }

  // site_category - computed: false, optional: true, required: false
  private _siteCategory?: string[]; 
  public get siteCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('site_category'));
  }
  public set siteCategory(value: string[]) {
    this._siteCategory = value;
  }
  public resetSiteCategory() {
    this._siteCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteCategoryInput() {
    return this._siteCategory;
  }

  // site_category_negate - computed: false, optional: true, required: false
  private _siteCategoryNegate?: boolean | cdktf.IResolvable; 
  public get siteCategoryNegate() {
    return this.getBooleanAttribute('site_category_negate');
  }
  public set siteCategoryNegate(value: boolean | cdktf.IResolvable) {
    this._siteCategoryNegate = value;
  }
  public resetSiteCategoryNegate() {
    this._siteCategoryNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteCategoryNegateInput() {
    return this._siteCategoryNegate;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string[]; 
  public get source() {
    return cdktf.Fn.tolist(this.getListAttribute('source'));
  }
  public set source(value: string[]) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_negate - computed: false, optional: true, required: false
  private _sourceNegate?: boolean | cdktf.IResolvable; 
  public get sourceNegate() {
    return this.getBooleanAttribute('source_negate');
  }
  public set sourceNegate(value: boolean | cdktf.IResolvable) {
    this._sourceNegate = value;
  }
  public resetSourceNegate() {
    this._sourceNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNegateInput() {
    return this._sourceNegate;
  }

  // track - computed: false, optional: true, required: false
  private _track?: string; 
  public get track() {
    return this.getStringAttribute('track');
  }
  public set track(value: string) {
    this._track = value;
  }
  public resetTrack() {
    this._track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      blade: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blade),
      certificate: cdktf.stringToTerraform(this._certificate),
      comments: cdktf.stringToTerraform(this._comments),
      destination: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destination),
      destination_negate: cdktf.booleanToTerraform(this._destinationNegate),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      install_on: cdktf.listMapper(cdktf.stringToTerraform, false)(this._installOn),
      layer: cdktf.stringToTerraform(this._layer),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.hashMapper(cdktf.stringToTerraform)(this._position),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      service_negate: cdktf.booleanToTerraform(this._serviceNegate),
      site_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._siteCategory),
      site_category_negate: cdktf.booleanToTerraform(this._siteCategoryNegate),
      source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._source),
      source_negate: cdktf.booleanToTerraform(this._sourceNegate),
      track: cdktf.stringToTerraform(this._track),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blade: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blade),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destination),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      destination_negate: {
        value: cdktf.booleanToHclTerraform(this._destinationNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      install_on: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._installOn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      layer: {
        value: cdktf.stringToHclTerraform(this._layer),
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
      position: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._position),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_negate: {
        value: cdktf.booleanToHclTerraform(this._serviceNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._siteCategory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      site_category_negate: {
        value: cdktf.booleanToHclTerraform(this._siteCategoryNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._source),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_negate: {
        value: cdktf.booleanToHclTerraform(this._sourceNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      track: {
        value: cdktf.stringToHclTerraform(this._track),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
