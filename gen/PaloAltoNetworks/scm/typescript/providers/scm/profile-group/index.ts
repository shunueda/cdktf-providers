// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ai security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#ai_security ProfileGroup#ai_security}
  */
  readonly aiSecurity?: string[];
  /**
  * Data filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#data_filtering ProfileGroup#data_filtering}
  */
  readonly dataFiltering?: string[];
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#device ProfileGroup#device}
  */
  readonly device?: string;
  /**
  * Dns security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#dns_security ProfileGroup#dns_security}
  */
  readonly dnsSecurity?: string[];
  /**
  * File blocking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#file_blocking ProfileGroup#file_blocking}
  */
  readonly fileBlocking?: string[];
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#folder ProfileGroup#folder}
  */
  readonly folder?: string;
  /**
  * The name of the profile group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#name ProfileGroup#name}
  */
  readonly name: string;
  /**
  * Saas security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#saas_security ProfileGroup#saas_security}
  */
  readonly saasSecurity?: string[];
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#snippet ProfileGroup#snippet}
  */
  readonly snippet?: string;
  /**
  * Spyware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#spyware ProfileGroup#spyware}
  */
  readonly spyware?: string[];
  /**
  * Url filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#url_filtering ProfileGroup#url_filtering}
  */
  readonly urlFiltering?: string[];
  /**
  * Virus and wildfire analysis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#virus_and_wildfire_analysis ProfileGroup#virus_and_wildfire_analysis}
  */
  readonly virusAndWildfireAnalysis?: string[];
  /**
  * Vulnerability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#vulnerability ProfileGroup#vulnerability}
  */
  readonly vulnerability?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group scm_profile_group}
*/
export class ProfileGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_profile_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileGroup to import
  * @param importFromId The id of the existing ProfileGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_profile_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/profile_group scm_profile_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_profile_group',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aiSecurity = config.aiSecurity;
    this._dataFiltering = config.dataFiltering;
    this._device = config.device;
    this._dnsSecurity = config.dnsSecurity;
    this._fileBlocking = config.fileBlocking;
    this._folder = config.folder;
    this._name = config.name;
    this._saasSecurity = config.saasSecurity;
    this._snippet = config.snippet;
    this._spyware = config.spyware;
    this._urlFiltering = config.urlFiltering;
    this._virusAndWildfireAnalysis = config.virusAndWildfireAnalysis;
    this._vulnerability = config.vulnerability;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ai_security - computed: false, optional: true, required: false
  private _aiSecurity?: string[]; 
  public get aiSecurity() {
    return this.getListAttribute('ai_security');
  }
  public set aiSecurity(value: string[]) {
    this._aiSecurity = value;
  }
  public resetAiSecurity() {
    this._aiSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiSecurityInput() {
    return this._aiSecurity;
  }

  // data_filtering - computed: false, optional: true, required: false
  private _dataFiltering?: string[]; 
  public get dataFiltering() {
    return this.getListAttribute('data_filtering');
  }
  public set dataFiltering(value: string[]) {
    this._dataFiltering = value;
  }
  public resetDataFiltering() {
    this._dataFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFilteringInput() {
    return this._dataFiltering;
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

  // dns_security - computed: false, optional: true, required: false
  private _dnsSecurity?: string[]; 
  public get dnsSecurity() {
    return this.getListAttribute('dns_security');
  }
  public set dnsSecurity(value: string[]) {
    this._dnsSecurity = value;
  }
  public resetDnsSecurity() {
    this._dnsSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSecurityInput() {
    return this._dnsSecurity;
  }

  // file_blocking - computed: false, optional: true, required: false
  private _fileBlocking?: string[]; 
  public get fileBlocking() {
    return this.getListAttribute('file_blocking');
  }
  public set fileBlocking(value: string[]) {
    this._fileBlocking = value;
  }
  public resetFileBlocking() {
    this._fileBlocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockingInput() {
    return this._fileBlocking;
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

  // saas_security - computed: false, optional: true, required: false
  private _saasSecurity?: string[]; 
  public get saasSecurity() {
    return this.getListAttribute('saas_security');
  }
  public set saasSecurity(value: string[]) {
    this._saasSecurity = value;
  }
  public resetSaasSecurity() {
    this._saasSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasSecurityInput() {
    return this._saasSecurity;
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

  // spyware - computed: false, optional: true, required: false
  private _spyware?: string[]; 
  public get spyware() {
    return this.getListAttribute('spyware');
  }
  public set spyware(value: string[]) {
    this._spyware = value;
  }
  public resetSpyware() {
    this._spyware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spywareInput() {
    return this._spyware;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // url_filtering - computed: false, optional: true, required: false
  private _urlFiltering?: string[]; 
  public get urlFiltering() {
    return this.getListAttribute('url_filtering');
  }
  public set urlFiltering(value: string[]) {
    this._urlFiltering = value;
  }
  public resetUrlFiltering() {
    this._urlFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringInput() {
    return this._urlFiltering;
  }

  // virus_and_wildfire_analysis - computed: false, optional: true, required: false
  private _virusAndWildfireAnalysis?: string[]; 
  public get virusAndWildfireAnalysis() {
    return this.getListAttribute('virus_and_wildfire_analysis');
  }
  public set virusAndWildfireAnalysis(value: string[]) {
    this._virusAndWildfireAnalysis = value;
  }
  public resetVirusAndWildfireAnalysis() {
    this._virusAndWildfireAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusAndWildfireAnalysisInput() {
    return this._virusAndWildfireAnalysis;
  }

  // vulnerability - computed: false, optional: true, required: false
  private _vulnerability?: string[]; 
  public get vulnerability() {
    return this.getListAttribute('vulnerability');
  }
  public set vulnerability(value: string[]) {
    this._vulnerability = value;
  }
  public resetVulnerability() {
    this._vulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityInput() {
    return this._vulnerability;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ai_security: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aiSecurity),
      data_filtering: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataFiltering),
      device: cdktf.stringToTerraform(this._device),
      dns_security: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsSecurity),
      file_blocking: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileBlocking),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      saas_security: cdktf.listMapper(cdktf.stringToTerraform, false)(this._saasSecurity),
      snippet: cdktf.stringToTerraform(this._snippet),
      spyware: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spyware),
      url_filtering: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urlFiltering),
      virus_and_wildfire_analysis: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virusAndWildfireAnalysis),
      vulnerability: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vulnerability),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ai_security: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aiSecurity),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_filtering: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataFiltering),
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
      dns_security: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsSecurity),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      file_blocking: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileBlocking),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saas_security: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._saasSecurity),
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
      spyware: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spyware),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      url_filtering: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urlFiltering),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      virus_and_wildfire_analysis: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virusAndWildfireAnalysis),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vulnerability: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vulnerability),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
