// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#category ApplicationFilter#category}
  */
  readonly category?: string[];
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#device ApplicationFilter#device}
  */
  readonly device?: string;
  /**
  * only True is a valid value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#evasive ApplicationFilter#evasive}
  */
  readonly evasive?: boolean | cdktf.IResolvable;
  /**
  * only True is a valid value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#excessive_bandwidth_use ApplicationFilter#excessive_bandwidth_use}
  */
  readonly excessiveBandwidthUse?: boolean | cdktf.IResolvable;
  /**
  * Exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#exclude ApplicationFilter#exclude}
  */
  readonly exclude?: string[];
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#folder ApplicationFilter#folder}
  */
  readonly folder?: string;
  /**
  * only True is a valid value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#has_known_vulnerabilities ApplicationFilter#has_known_vulnerabilities}
  */
  readonly hasKnownVulnerabilities?: boolean | cdktf.IResolvable;
  /**
  * only True is a valid value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#is_saas ApplicationFilter#is_saas}
  */
  readonly isSaas?: boolean | cdktf.IResolvable;
  /**
  * Alphanumeric string [ 0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#name ApplicationFilter#name}
  */
  readonly name: string;
  /**
  * only True is a valid value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#new_appid ApplicationFilter#new_appid}
  */
  readonly newAppid?: boolean | cdktf.IResolvable;
  /**
  * only True is a valid value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#pervasive ApplicationFilter#pervasive}
  */
  readonly pervasive?: boolean | cdktf.IResolvable;
  /**
  * only True is a valid value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#prone_to_misuse ApplicationFilter#prone_to_misuse}
  */
  readonly proneToMisuse?: boolean | cdktf.IResolvable;
  /**
  * Risk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#risk ApplicationFilter#risk}
  */
  readonly risk?: number[];
  /**
  * Saas certifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#saas_certifications ApplicationFilter#saas_certifications}
  */
  readonly saasCertifications?: string[];
  /**
  * Saas risk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#saas_risk ApplicationFilter#saas_risk}
  */
  readonly saasRisk?: string[];
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#snippet ApplicationFilter#snippet}
  */
  readonly snippet?: string;
  /**
  * Subcategory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#subcategory ApplicationFilter#subcategory}
  */
  readonly subcategory?: string[];
  /**
  * Tagging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#tagging ApplicationFilter#tagging}
  */
  readonly tagging?: ApplicationFilterTagging;
  /**
  * Technology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#technology ApplicationFilter#technology}
  */
  readonly technology?: string[];
  /**
  * only True is a valid value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#transfers_files ApplicationFilter#transfers_files}
  */
  readonly transfersFiles?: boolean | cdktf.IResolvable;
  /**
  * only True is a valid value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#tunnels_other_apps ApplicationFilter#tunnels_other_apps}
  */
  readonly tunnelsOtherApps?: boolean | cdktf.IResolvable;
  /**
  * only True is a valid value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#used_by_malware ApplicationFilter#used_by_malware}
  */
  readonly usedByMalware?: boolean | cdktf.IResolvable;
}
export interface ApplicationFilterTagging {
  /**
  * No tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#no_tag ApplicationFilter#no_tag}
  */
  readonly noTag?: boolean | cdktf.IResolvable;
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#tag ApplicationFilter#tag}
  */
  readonly tag?: string[];
}

export function applicationFilterTaggingToTerraform(struct?: ApplicationFilterTagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_tag: cdktf.booleanToTerraform(struct!.noTag),
    tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tag),
  }
}


export function applicationFilterTaggingToHclTerraform(struct?: ApplicationFilterTagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_tag: {
      value: cdktf.booleanToHclTerraform(struct!.noTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationFilterTaggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationFilterTagging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTag = this._noTag;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationFilterTagging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noTag = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noTag = value.noTag;
      this._tag = value.tag;
    }
  }

  // no_tag - computed: false, optional: true, required: false
  private _noTag?: boolean | cdktf.IResolvable; 
  public get noTag() {
    return this.getBooleanAttribute('no_tag');
  }
  public set noTag(value: boolean | cdktf.IResolvable) {
    this._noTag = value;
  }
  public resetNoTag() {
    this._noTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTagInput() {
    return this._noTag;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return this.getListAttribute('tag');
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter scm_application_filter}
*/
export class ApplicationFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_application_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationFilter to import
  * @param importFromId The id of the existing ApplicationFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_application_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/application_filter scm_application_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationFilterConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_application_filter',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._device = config.device;
    this._evasive = config.evasive;
    this._excessiveBandwidthUse = config.excessiveBandwidthUse;
    this._exclude = config.exclude;
    this._folder = config.folder;
    this._hasKnownVulnerabilities = config.hasKnownVulnerabilities;
    this._isSaas = config.isSaas;
    this._name = config.name;
    this._newAppid = config.newAppid;
    this._pervasive = config.pervasive;
    this._proneToMisuse = config.proneToMisuse;
    this._risk = config.risk;
    this._saasCertifications = config.saasCertifications;
    this._saasRisk = config.saasRisk;
    this._snippet = config.snippet;
    this._subcategory = config.subcategory;
    this._tagging.internalValue = config.tagging;
    this._technology = config.technology;
    this._transfersFiles = config.transfersFiles;
    this._tunnelsOtherApps = config.tunnelsOtherApps;
    this._usedByMalware = config.usedByMalware;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string[]; 
  public get category() {
    return this.getListAttribute('category');
  }
  public set category(value: string[]) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // evasive - computed: false, optional: true, required: false
  private _evasive?: boolean | cdktf.IResolvable; 
  public get evasive() {
    return this.getBooleanAttribute('evasive');
  }
  public set evasive(value: boolean | cdktf.IResolvable) {
    this._evasive = value;
  }
  public resetEvasive() {
    this._evasive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evasiveInput() {
    return this._evasive;
  }

  // excessive_bandwidth_use - computed: false, optional: true, required: false
  private _excessiveBandwidthUse?: boolean | cdktf.IResolvable; 
  public get excessiveBandwidthUse() {
    return this.getBooleanAttribute('excessive_bandwidth_use');
  }
  public set excessiveBandwidthUse(value: boolean | cdktf.IResolvable) {
    this._excessiveBandwidthUse = value;
  }
  public resetExcessiveBandwidthUse() {
    this._excessiveBandwidthUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excessiveBandwidthUseInput() {
    return this._excessiveBandwidthUse;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // has_known_vulnerabilities - computed: false, optional: true, required: false
  private _hasKnownVulnerabilities?: boolean | cdktf.IResolvable; 
  public get hasKnownVulnerabilities() {
    return this.getBooleanAttribute('has_known_vulnerabilities');
  }
  public set hasKnownVulnerabilities(value: boolean | cdktf.IResolvable) {
    this._hasKnownVulnerabilities = value;
  }
  public resetHasKnownVulnerabilities() {
    this._hasKnownVulnerabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasKnownVulnerabilitiesInput() {
    return this._hasKnownVulnerabilities;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_saas - computed: false, optional: true, required: false
  private _isSaas?: boolean | cdktf.IResolvable; 
  public get isSaas() {
    return this.getBooleanAttribute('is_saas');
  }
  public set isSaas(value: boolean | cdktf.IResolvable) {
    this._isSaas = value;
  }
  public resetIsSaas() {
    this._isSaas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSaasInput() {
    return this._isSaas;
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

  // new_appid - computed: false, optional: true, required: false
  private _newAppid?: boolean | cdktf.IResolvable; 
  public get newAppid() {
    return this.getBooleanAttribute('new_appid');
  }
  public set newAppid(value: boolean | cdktf.IResolvable) {
    this._newAppid = value;
  }
  public resetNewAppid() {
    this._newAppid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newAppidInput() {
    return this._newAppid;
  }

  // pervasive - computed: false, optional: true, required: false
  private _pervasive?: boolean | cdktf.IResolvable; 
  public get pervasive() {
    return this.getBooleanAttribute('pervasive');
  }
  public set pervasive(value: boolean | cdktf.IResolvable) {
    this._pervasive = value;
  }
  public resetPervasive() {
    this._pervasive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pervasiveInput() {
    return this._pervasive;
  }

  // prone_to_misuse - computed: false, optional: true, required: false
  private _proneToMisuse?: boolean | cdktf.IResolvable; 
  public get proneToMisuse() {
    return this.getBooleanAttribute('prone_to_misuse');
  }
  public set proneToMisuse(value: boolean | cdktf.IResolvable) {
    this._proneToMisuse = value;
  }
  public resetProneToMisuse() {
    this._proneToMisuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proneToMisuseInput() {
    return this._proneToMisuse;
  }

  // risk - computed: false, optional: true, required: false
  private _risk?: number[]; 
  public get risk() {
    return this.getNumberListAttribute('risk');
  }
  public set risk(value: number[]) {
    this._risk = value;
  }
  public resetRisk() {
    this._risk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // saas_certifications - computed: false, optional: true, required: false
  private _saasCertifications?: string[]; 
  public get saasCertifications() {
    return this.getListAttribute('saas_certifications');
  }
  public set saasCertifications(value: string[]) {
    this._saasCertifications = value;
  }
  public resetSaasCertifications() {
    this._saasCertifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasCertificationsInput() {
    return this._saasCertifications;
  }

  // saas_risk - computed: false, optional: true, required: false
  private _saasRisk?: string[]; 
  public get saasRisk() {
    return this.getListAttribute('saas_risk');
  }
  public set saasRisk(value: string[]) {
    this._saasRisk = value;
  }
  public resetSaasRisk() {
    this._saasRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasRiskInput() {
    return this._saasRisk;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // subcategory - computed: false, optional: true, required: false
  private _subcategory?: string[]; 
  public get subcategory() {
    return this.getListAttribute('subcategory');
  }
  public set subcategory(value: string[]) {
    this._subcategory = value;
  }
  public resetSubcategory() {
    this._subcategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subcategoryInput() {
    return this._subcategory;
  }

  // tagging - computed: false, optional: true, required: false
  private _tagging = new ApplicationFilterTaggingOutputReference(this, "tagging");
  public get tagging() {
    return this._tagging;
  }
  public putTagging(value: ApplicationFilterTagging) {
    this._tagging.internalValue = value;
  }
  public resetTagging() {
    this._tagging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggingInput() {
    return this._tagging.internalValue;
  }

  // technology - computed: false, optional: true, required: false
  private _technology?: string[]; 
  public get technology() {
    return this.getListAttribute('technology');
  }
  public set technology(value: string[]) {
    this._technology = value;
  }
  public resetTechnology() {
    this._technology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyInput() {
    return this._technology;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // transfers_files - computed: false, optional: true, required: false
  private _transfersFiles?: boolean | cdktf.IResolvable; 
  public get transfersFiles() {
    return this.getBooleanAttribute('transfers_files');
  }
  public set transfersFiles(value: boolean | cdktf.IResolvable) {
    this._transfersFiles = value;
  }
  public resetTransfersFiles() {
    this._transfersFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transfersFilesInput() {
    return this._transfersFiles;
  }

  // tunnels_other_apps - computed: false, optional: true, required: false
  private _tunnelsOtherApps?: boolean | cdktf.IResolvable; 
  public get tunnelsOtherApps() {
    return this.getBooleanAttribute('tunnels_other_apps');
  }
  public set tunnelsOtherApps(value: boolean | cdktf.IResolvable) {
    this._tunnelsOtherApps = value;
  }
  public resetTunnelsOtherApps() {
    this._tunnelsOtherApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelsOtherAppsInput() {
    return this._tunnelsOtherApps;
  }

  // used_by_malware - computed: false, optional: true, required: false
  private _usedByMalware?: boolean | cdktf.IResolvable; 
  public get usedByMalware() {
    return this.getBooleanAttribute('used_by_malware');
  }
  public set usedByMalware(value: boolean | cdktf.IResolvable) {
    this._usedByMalware = value;
  }
  public resetUsedByMalware() {
    this._usedByMalware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedByMalwareInput() {
    return this._usedByMalware;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._category),
      device: cdktf.stringToTerraform(this._device),
      evasive: cdktf.booleanToTerraform(this._evasive),
      excessive_bandwidth_use: cdktf.booleanToTerraform(this._excessiveBandwidthUse),
      exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exclude),
      folder: cdktf.stringToTerraform(this._folder),
      has_known_vulnerabilities: cdktf.booleanToTerraform(this._hasKnownVulnerabilities),
      is_saas: cdktf.booleanToTerraform(this._isSaas),
      name: cdktf.stringToTerraform(this._name),
      new_appid: cdktf.booleanToTerraform(this._newAppid),
      pervasive: cdktf.booleanToTerraform(this._pervasive),
      prone_to_misuse: cdktf.booleanToTerraform(this._proneToMisuse),
      risk: cdktf.listMapper(cdktf.numberToTerraform, false)(this._risk),
      saas_certifications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._saasCertifications),
      saas_risk: cdktf.listMapper(cdktf.stringToTerraform, false)(this._saasRisk),
      snippet: cdktf.stringToTerraform(this._snippet),
      subcategory: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subcategory),
      tagging: applicationFilterTaggingToTerraform(this._tagging.internalValue),
      technology: cdktf.listMapper(cdktf.stringToTerraform, false)(this._technology),
      transfers_files: cdktf.booleanToTerraform(this._transfersFiles),
      tunnels_other_apps: cdktf.booleanToTerraform(this._tunnelsOtherApps),
      used_by_malware: cdktf.booleanToTerraform(this._usedByMalware),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._category),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evasive: {
        value: cdktf.booleanToHclTerraform(this._evasive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excessive_bandwidth_use: {
        value: cdktf.booleanToHclTerraform(this._excessiveBandwidthUse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exclude),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_known_vulnerabilities: {
        value: cdktf.booleanToHclTerraform(this._hasKnownVulnerabilities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_saas: {
        value: cdktf.booleanToHclTerraform(this._isSaas),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_appid: {
        value: cdktf.booleanToHclTerraform(this._newAppid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pervasive: {
        value: cdktf.booleanToHclTerraform(this._pervasive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prone_to_misuse: {
        value: cdktf.booleanToHclTerraform(this._proneToMisuse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      risk: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._risk),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      saas_certifications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._saasCertifications),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      saas_risk: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._saasRisk),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subcategory: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subcategory),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tagging: {
        value: applicationFilterTaggingToHclTerraform(this._tagging.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationFilterTagging",
      },
      technology: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._technology),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transfers_files: {
        value: cdktf.booleanToHclTerraform(this._transfersFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnels_other_apps: {
        value: cdktf.booleanToHclTerraform(this._tunnelsOtherApps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      used_by_malware: {
        value: cdktf.booleanToHclTerraform(this._usedByMalware),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
