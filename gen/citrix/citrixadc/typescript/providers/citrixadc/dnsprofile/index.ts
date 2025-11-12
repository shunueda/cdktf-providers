// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#cacheecsresponses Dnsprofile#cacheecsresponses}
  */
  readonly cacheecsresponses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#cachenegativeresponses Dnsprofile#cachenegativeresponses}
  */
  readonly cachenegativeresponses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#cacherecords Dnsprofile#cacherecords}
  */
  readonly cacherecords?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#dnsanswerseclogging Dnsprofile#dnsanswerseclogging}
  */
  readonly dnsanswerseclogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#dnserrorlogging Dnsprofile#dnserrorlogging}
  */
  readonly dnserrorlogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#dnsextendedlogging Dnsprofile#dnsextendedlogging}
  */
  readonly dnsextendedlogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#dnsprofilename Dnsprofile#dnsprofilename}
  */
  readonly dnsprofilename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#dnsquerylogging Dnsprofile#dnsquerylogging}
  */
  readonly dnsquerylogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#dropmultiqueryrequest Dnsprofile#dropmultiqueryrequest}
  */
  readonly dropmultiqueryrequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#id Dnsprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#insertecs Dnsprofile#insertecs}
  */
  readonly insertecs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#maxcacheableecsprefixlength Dnsprofile#maxcacheableecsprefixlength}
  */
  readonly maxcacheableecsprefixlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#maxcacheableecsprefixlength6 Dnsprofile#maxcacheableecsprefixlength6}
  */
  readonly maxcacheableecsprefixlength6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#recursiveresolution Dnsprofile#recursiveresolution}
  */
  readonly recursiveresolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#replaceecs Dnsprofile#replaceecs}
  */
  readonly replaceecs?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile citrixadc_dnsprofile}
*/
export class Dnsprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_dnsprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnsprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnsprofile to import
  * @param importFromId The id of the existing Dnsprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnsprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_dnsprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsprofile citrixadc_dnsprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsprofileConfig
  */
  public constructor(scope: Construct, id: string, config: DnsprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_dnsprofile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheecsresponses = config.cacheecsresponses;
    this._cachenegativeresponses = config.cachenegativeresponses;
    this._cacherecords = config.cacherecords;
    this._dnsanswerseclogging = config.dnsanswerseclogging;
    this._dnserrorlogging = config.dnserrorlogging;
    this._dnsextendedlogging = config.dnsextendedlogging;
    this._dnsprofilename = config.dnsprofilename;
    this._dnsquerylogging = config.dnsquerylogging;
    this._dropmultiqueryrequest = config.dropmultiqueryrequest;
    this._id = config.id;
    this._insertecs = config.insertecs;
    this._maxcacheableecsprefixlength = config.maxcacheableecsprefixlength;
    this._maxcacheableecsprefixlength6 = config.maxcacheableecsprefixlength6;
    this._recursiveresolution = config.recursiveresolution;
    this._replaceecs = config.replaceecs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cacheecsresponses - computed: true, optional: true, required: false
  private _cacheecsresponses?: string; 
  public get cacheecsresponses() {
    return this.getStringAttribute('cacheecsresponses');
  }
  public set cacheecsresponses(value: string) {
    this._cacheecsresponses = value;
  }
  public resetCacheecsresponses() {
    this._cacheecsresponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheecsresponsesInput() {
    return this._cacheecsresponses;
  }

  // cachenegativeresponses - computed: true, optional: true, required: false
  private _cachenegativeresponses?: string; 
  public get cachenegativeresponses() {
    return this.getStringAttribute('cachenegativeresponses');
  }
  public set cachenegativeresponses(value: string) {
    this._cachenegativeresponses = value;
  }
  public resetCachenegativeresponses() {
    this._cachenegativeresponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachenegativeresponsesInput() {
    return this._cachenegativeresponses;
  }

  // cacherecords - computed: true, optional: true, required: false
  private _cacherecords?: string; 
  public get cacherecords() {
    return this.getStringAttribute('cacherecords');
  }
  public set cacherecords(value: string) {
    this._cacherecords = value;
  }
  public resetCacherecords() {
    this._cacherecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacherecordsInput() {
    return this._cacherecords;
  }

  // dnsanswerseclogging - computed: true, optional: true, required: false
  private _dnsanswerseclogging?: string; 
  public get dnsanswerseclogging() {
    return this.getStringAttribute('dnsanswerseclogging');
  }
  public set dnsanswerseclogging(value: string) {
    this._dnsanswerseclogging = value;
  }
  public resetDnsanswerseclogging() {
    this._dnsanswerseclogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsanswersecloggingInput() {
    return this._dnsanswerseclogging;
  }

  // dnserrorlogging - computed: true, optional: true, required: false
  private _dnserrorlogging?: string; 
  public get dnserrorlogging() {
    return this.getStringAttribute('dnserrorlogging');
  }
  public set dnserrorlogging(value: string) {
    this._dnserrorlogging = value;
  }
  public resetDnserrorlogging() {
    this._dnserrorlogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnserrorloggingInput() {
    return this._dnserrorlogging;
  }

  // dnsextendedlogging - computed: true, optional: true, required: false
  private _dnsextendedlogging?: string; 
  public get dnsextendedlogging() {
    return this.getStringAttribute('dnsextendedlogging');
  }
  public set dnsextendedlogging(value: string) {
    this._dnsextendedlogging = value;
  }
  public resetDnsextendedlogging() {
    this._dnsextendedlogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsextendedloggingInput() {
    return this._dnsextendedlogging;
  }

  // dnsprofilename - computed: false, optional: false, required: true
  private _dnsprofilename?: string; 
  public get dnsprofilename() {
    return this.getStringAttribute('dnsprofilename');
  }
  public set dnsprofilename(value: string) {
    this._dnsprofilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsprofilenameInput() {
    return this._dnsprofilename;
  }

  // dnsquerylogging - computed: true, optional: true, required: false
  private _dnsquerylogging?: string; 
  public get dnsquerylogging() {
    return this.getStringAttribute('dnsquerylogging');
  }
  public set dnsquerylogging(value: string) {
    this._dnsquerylogging = value;
  }
  public resetDnsquerylogging() {
    this._dnsquerylogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsqueryloggingInput() {
    return this._dnsquerylogging;
  }

  // dropmultiqueryrequest - computed: true, optional: true, required: false
  private _dropmultiqueryrequest?: string; 
  public get dropmultiqueryrequest() {
    return this.getStringAttribute('dropmultiqueryrequest');
  }
  public set dropmultiqueryrequest(value: string) {
    this._dropmultiqueryrequest = value;
  }
  public resetDropmultiqueryrequest() {
    this._dropmultiqueryrequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropmultiqueryrequestInput() {
    return this._dropmultiqueryrequest;
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

  // insertecs - computed: true, optional: true, required: false
  private _insertecs?: string; 
  public get insertecs() {
    return this.getStringAttribute('insertecs');
  }
  public set insertecs(value: string) {
    this._insertecs = value;
  }
  public resetInsertecs() {
    this._insertecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertecsInput() {
    return this._insertecs;
  }

  // maxcacheableecsprefixlength - computed: true, optional: true, required: false
  private _maxcacheableecsprefixlength?: number; 
  public get maxcacheableecsprefixlength() {
    return this.getNumberAttribute('maxcacheableecsprefixlength');
  }
  public set maxcacheableecsprefixlength(value: number) {
    this._maxcacheableecsprefixlength = value;
  }
  public resetMaxcacheableecsprefixlength() {
    this._maxcacheableecsprefixlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxcacheableecsprefixlengthInput() {
    return this._maxcacheableecsprefixlength;
  }

  // maxcacheableecsprefixlength6 - computed: true, optional: true, required: false
  private _maxcacheableecsprefixlength6?: number; 
  public get maxcacheableecsprefixlength6() {
    return this.getNumberAttribute('maxcacheableecsprefixlength6');
  }
  public set maxcacheableecsprefixlength6(value: number) {
    this._maxcacheableecsprefixlength6 = value;
  }
  public resetMaxcacheableecsprefixlength6() {
    this._maxcacheableecsprefixlength6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxcacheableecsprefixlength6Input() {
    return this._maxcacheableecsprefixlength6;
  }

  // recursiveresolution - computed: true, optional: true, required: false
  private _recursiveresolution?: string; 
  public get recursiveresolution() {
    return this.getStringAttribute('recursiveresolution');
  }
  public set recursiveresolution(value: string) {
    this._recursiveresolution = value;
  }
  public resetRecursiveresolution() {
    this._recursiveresolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveresolutionInput() {
    return this._recursiveresolution;
  }

  // replaceecs - computed: true, optional: true, required: false
  private _replaceecs?: string; 
  public get replaceecs() {
    return this.getStringAttribute('replaceecs');
  }
  public set replaceecs(value: string) {
    this._replaceecs = value;
  }
  public resetReplaceecs() {
    this._replaceecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceecsInput() {
    return this._replaceecs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cacheecsresponses: cdktf.stringToTerraform(this._cacheecsresponses),
      cachenegativeresponses: cdktf.stringToTerraform(this._cachenegativeresponses),
      cacherecords: cdktf.stringToTerraform(this._cacherecords),
      dnsanswerseclogging: cdktf.stringToTerraform(this._dnsanswerseclogging),
      dnserrorlogging: cdktf.stringToTerraform(this._dnserrorlogging),
      dnsextendedlogging: cdktf.stringToTerraform(this._dnsextendedlogging),
      dnsprofilename: cdktf.stringToTerraform(this._dnsprofilename),
      dnsquerylogging: cdktf.stringToTerraform(this._dnsquerylogging),
      dropmultiqueryrequest: cdktf.stringToTerraform(this._dropmultiqueryrequest),
      id: cdktf.stringToTerraform(this._id),
      insertecs: cdktf.stringToTerraform(this._insertecs),
      maxcacheableecsprefixlength: cdktf.numberToTerraform(this._maxcacheableecsprefixlength),
      maxcacheableecsprefixlength6: cdktf.numberToTerraform(this._maxcacheableecsprefixlength6),
      recursiveresolution: cdktf.stringToTerraform(this._recursiveresolution),
      replaceecs: cdktf.stringToTerraform(this._replaceecs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cacheecsresponses: {
        value: cdktf.stringToHclTerraform(this._cacheecsresponses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cachenegativeresponses: {
        value: cdktf.stringToHclTerraform(this._cachenegativeresponses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacherecords: {
        value: cdktf.stringToHclTerraform(this._cacherecords),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsanswerseclogging: {
        value: cdktf.stringToHclTerraform(this._dnsanswerseclogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnserrorlogging: {
        value: cdktf.stringToHclTerraform(this._dnserrorlogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsextendedlogging: {
        value: cdktf.stringToHclTerraform(this._dnsextendedlogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsprofilename: {
        value: cdktf.stringToHclTerraform(this._dnsprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsquerylogging: {
        value: cdktf.stringToHclTerraform(this._dnsquerylogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dropmultiqueryrequest: {
        value: cdktf.stringToHclTerraform(this._dropmultiqueryrequest),
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
      insertecs: {
        value: cdktf.stringToHclTerraform(this._insertecs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxcacheableecsprefixlength: {
        value: cdktf.numberToHclTerraform(this._maxcacheableecsprefixlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxcacheableecsprefixlength6: {
        value: cdktf.numberToHclTerraform(this._maxcacheableecsprefixlength6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recursiveresolution: {
        value: cdktf.stringToHclTerraform(this._recursiveresolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replaceecs: {
        value: cdktf.stringToHclTerraform(this._replaceecs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
