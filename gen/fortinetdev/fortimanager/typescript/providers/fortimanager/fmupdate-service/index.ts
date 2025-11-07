// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmupdateServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service#avips FmupdateService#avips}
  */
  readonly avips?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service#id FmupdateService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service#query_antispam FmupdateService#query_antispam}
  */
  readonly queryAntispam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service#query_antivirus FmupdateService#query_antivirus}
  */
  readonly queryAntivirus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service#query_filequery FmupdateService#query_filequery}
  */
  readonly queryFilequery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service#query_ioc FmupdateService#query_ioc}
  */
  readonly queryIoc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service#query_iot FmupdateService#query_iot}
  */
  readonly queryIot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service#query_iot_collection FmupdateService#query_iot_collection}
  */
  readonly queryIotCollection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service#query_iot_vulnerability FmupdateService#query_iot_vulnerability}
  */
  readonly queryIotVulnerability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service#query_outbreak_prevention FmupdateService#query_outbreak_prevention}
  */
  readonly queryOutbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service#query_webfilter FmupdateService#query_webfilter}
  */
  readonly queryWebfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service#webfilter_https_traversal FmupdateService#webfilter_https_traversal}
  */
  readonly webfilterHttpsTraversal?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service fortimanager_fmupdate_service}
*/
export class FmupdateService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_fmupdate_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmupdateService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmupdateService to import
  * @param importFromId The id of the existing FmupdateService that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmupdateService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_fmupdate_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_service fortimanager_fmupdate_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmupdateServiceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FmupdateServiceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_fmupdate_service',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._avips = config.avips;
    this._id = config.id;
    this._queryAntispam = config.queryAntispam;
    this._queryAntivirus = config.queryAntivirus;
    this._queryFilequery = config.queryFilequery;
    this._queryIoc = config.queryIoc;
    this._queryIot = config.queryIot;
    this._queryIotCollection = config.queryIotCollection;
    this._queryIotVulnerability = config.queryIotVulnerability;
    this._queryOutbreakPrevention = config.queryOutbreakPrevention;
    this._queryWebfilter = config.queryWebfilter;
    this._webfilterHttpsTraversal = config.webfilterHttpsTraversal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avips - computed: true, optional: true, required: false
  private _avips?: string; 
  public get avips() {
    return this.getStringAttribute('avips');
  }
  public set avips(value: string) {
    this._avips = value;
  }
  public resetAvips() {
    this._avips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avipsInput() {
    return this._avips;
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

  // query_antispam - computed: true, optional: true, required: false
  private _queryAntispam?: string; 
  public get queryAntispam() {
    return this.getStringAttribute('query_antispam');
  }
  public set queryAntispam(value: string) {
    this._queryAntispam = value;
  }
  public resetQueryAntispam() {
    this._queryAntispam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAntispamInput() {
    return this._queryAntispam;
  }

  // query_antivirus - computed: true, optional: true, required: false
  private _queryAntivirus?: string; 
  public get queryAntivirus() {
    return this.getStringAttribute('query_antivirus');
  }
  public set queryAntivirus(value: string) {
    this._queryAntivirus = value;
  }
  public resetQueryAntivirus() {
    this._queryAntivirus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAntivirusInput() {
    return this._queryAntivirus;
  }

  // query_filequery - computed: true, optional: true, required: false
  private _queryFilequery?: string; 
  public get queryFilequery() {
    return this.getStringAttribute('query_filequery');
  }
  public set queryFilequery(value: string) {
    this._queryFilequery = value;
  }
  public resetQueryFilequery() {
    this._queryFilequery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFilequeryInput() {
    return this._queryFilequery;
  }

  // query_ioc - computed: true, optional: true, required: false
  private _queryIoc?: string; 
  public get queryIoc() {
    return this.getStringAttribute('query_ioc');
  }
  public set queryIoc(value: string) {
    this._queryIoc = value;
  }
  public resetQueryIoc() {
    this._queryIoc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIocInput() {
    return this._queryIoc;
  }

  // query_iot - computed: true, optional: true, required: false
  private _queryIot?: string; 
  public get queryIot() {
    return this.getStringAttribute('query_iot');
  }
  public set queryIot(value: string) {
    this._queryIot = value;
  }
  public resetQueryIot() {
    this._queryIot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIotInput() {
    return this._queryIot;
  }

  // query_iot_collection - computed: true, optional: true, required: false
  private _queryIotCollection?: string; 
  public get queryIotCollection() {
    return this.getStringAttribute('query_iot_collection');
  }
  public set queryIotCollection(value: string) {
    this._queryIotCollection = value;
  }
  public resetQueryIotCollection() {
    this._queryIotCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIotCollectionInput() {
    return this._queryIotCollection;
  }

  // query_iot_vulnerability - computed: true, optional: true, required: false
  private _queryIotVulnerability?: string; 
  public get queryIotVulnerability() {
    return this.getStringAttribute('query_iot_vulnerability');
  }
  public set queryIotVulnerability(value: string) {
    this._queryIotVulnerability = value;
  }
  public resetQueryIotVulnerability() {
    this._queryIotVulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIotVulnerabilityInput() {
    return this._queryIotVulnerability;
  }

  // query_outbreak_prevention - computed: true, optional: true, required: false
  private _queryOutbreakPrevention?: string; 
  public get queryOutbreakPrevention() {
    return this.getStringAttribute('query_outbreak_prevention');
  }
  public set queryOutbreakPrevention(value: string) {
    this._queryOutbreakPrevention = value;
  }
  public resetQueryOutbreakPrevention() {
    this._queryOutbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryOutbreakPreventionInput() {
    return this._queryOutbreakPrevention;
  }

  // query_webfilter - computed: true, optional: true, required: false
  private _queryWebfilter?: string; 
  public get queryWebfilter() {
    return this.getStringAttribute('query_webfilter');
  }
  public set queryWebfilter(value: string) {
    this._queryWebfilter = value;
  }
  public resetQueryWebfilter() {
    this._queryWebfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryWebfilterInput() {
    return this._queryWebfilter;
  }

  // webfilter_https_traversal - computed: true, optional: true, required: false
  private _webfilterHttpsTraversal?: string; 
  public get webfilterHttpsTraversal() {
    return this.getStringAttribute('webfilter_https_traversal');
  }
  public set webfilterHttpsTraversal(value: string) {
    this._webfilterHttpsTraversal = value;
  }
  public resetWebfilterHttpsTraversal() {
    this._webfilterHttpsTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterHttpsTraversalInput() {
    return this._webfilterHttpsTraversal;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      avips: cdktf.stringToTerraform(this._avips),
      id: cdktf.stringToTerraform(this._id),
      query_antispam: cdktf.stringToTerraform(this._queryAntispam),
      query_antivirus: cdktf.stringToTerraform(this._queryAntivirus),
      query_filequery: cdktf.stringToTerraform(this._queryFilequery),
      query_ioc: cdktf.stringToTerraform(this._queryIoc),
      query_iot: cdktf.stringToTerraform(this._queryIot),
      query_iot_collection: cdktf.stringToTerraform(this._queryIotCollection),
      query_iot_vulnerability: cdktf.stringToTerraform(this._queryIotVulnerability),
      query_outbreak_prevention: cdktf.stringToTerraform(this._queryOutbreakPrevention),
      query_webfilter: cdktf.stringToTerraform(this._queryWebfilter),
      webfilter_https_traversal: cdktf.stringToTerraform(this._webfilterHttpsTraversal),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      avips: {
        value: cdktf.stringToHclTerraform(this._avips),
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
      query_antispam: {
        value: cdktf.stringToHclTerraform(this._queryAntispam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_antivirus: {
        value: cdktf.stringToHclTerraform(this._queryAntivirus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_filequery: {
        value: cdktf.stringToHclTerraform(this._queryFilequery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_ioc: {
        value: cdktf.stringToHclTerraform(this._queryIoc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_iot: {
        value: cdktf.stringToHclTerraform(this._queryIot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_iot_collection: {
        value: cdktf.stringToHclTerraform(this._queryIotCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_iot_vulnerability: {
        value: cdktf.stringToHclTerraform(this._queryIotVulnerability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_outbreak_prevention: {
        value: cdktf.stringToHclTerraform(this._queryOutbreakPrevention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_webfilter: {
        value: cdktf.stringToHclTerraform(this._queryWebfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webfilter_https_traversal: {
        value: cdktf.stringToHclTerraform(this._webfilterHttpsTraversal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
