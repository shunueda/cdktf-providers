// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppflowactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#botinsight Appflowaction#botinsight}
  */
  readonly botinsight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#ciinsight Appflowaction#ciinsight}
  */
  readonly ciinsight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#clientsidemeasurements Appflowaction#clientsidemeasurements}
  */
  readonly clientsidemeasurements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#collectors Appflowaction#collectors}
  */
  readonly collectors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#comment Appflowaction#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#distributionalgorithm Appflowaction#distributionalgorithm}
  */
  readonly distributionalgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#id Appflowaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#metricslog Appflowaction#metricslog}
  */
  readonly metricslog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#name Appflowaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#pagetracking Appflowaction#pagetracking}
  */
  readonly pagetracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#securityinsight Appflowaction#securityinsight}
  */
  readonly securityinsight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#transactionlog Appflowaction#transactionlog}
  */
  readonly transactionlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#videoanalytics Appflowaction#videoanalytics}
  */
  readonly videoanalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#webinsight Appflowaction#webinsight}
  */
  readonly webinsight?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction citrixadc_appflowaction}
*/
export class Appflowaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appflowaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appflowaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appflowaction to import
  * @param importFromId The id of the existing Appflowaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appflowaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appflowaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appflowaction citrixadc_appflowaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppflowactionConfig
  */
  public constructor(scope: Construct, id: string, config: AppflowactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appflowaction',
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
    this._botinsight = config.botinsight;
    this._ciinsight = config.ciinsight;
    this._clientsidemeasurements = config.clientsidemeasurements;
    this._collectors = config.collectors;
    this._comment = config.comment;
    this._distributionalgorithm = config.distributionalgorithm;
    this._id = config.id;
    this._metricslog = config.metricslog;
    this._name = config.name;
    this._pagetracking = config.pagetracking;
    this._securityinsight = config.securityinsight;
    this._transactionlog = config.transactionlog;
    this._videoanalytics = config.videoanalytics;
    this._webinsight = config.webinsight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // botinsight - computed: true, optional: true, required: false
  private _botinsight?: string; 
  public get botinsight() {
    return this.getStringAttribute('botinsight');
  }
  public set botinsight(value: string) {
    this._botinsight = value;
  }
  public resetBotinsight() {
    this._botinsight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botinsightInput() {
    return this._botinsight;
  }

  // ciinsight - computed: true, optional: true, required: false
  private _ciinsight?: string; 
  public get ciinsight() {
    return this.getStringAttribute('ciinsight');
  }
  public set ciinsight(value: string) {
    this._ciinsight = value;
  }
  public resetCiinsight() {
    this._ciinsight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciinsightInput() {
    return this._ciinsight;
  }

  // clientsidemeasurements - computed: true, optional: true, required: false
  private _clientsidemeasurements?: string; 
  public get clientsidemeasurements() {
    return this.getStringAttribute('clientsidemeasurements');
  }
  public set clientsidemeasurements(value: string) {
    this._clientsidemeasurements = value;
  }
  public resetClientsidemeasurements() {
    this._clientsidemeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsidemeasurementsInput() {
    return this._clientsidemeasurements;
  }

  // collectors - computed: true, optional: true, required: false
  private _collectors?: string[]; 
  public get collectors() {
    return this.getListAttribute('collectors');
  }
  public set collectors(value: string[]) {
    this._collectors = value;
  }
  public resetCollectors() {
    this._collectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // distributionalgorithm - computed: true, optional: true, required: false
  private _distributionalgorithm?: string; 
  public get distributionalgorithm() {
    return this.getStringAttribute('distributionalgorithm');
  }
  public set distributionalgorithm(value: string) {
    this._distributionalgorithm = value;
  }
  public resetDistributionalgorithm() {
    this._distributionalgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionalgorithmInput() {
    return this._distributionalgorithm;
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

  // metricslog - computed: true, optional: true, required: false
  private _metricslog?: boolean | cdktf.IResolvable; 
  public get metricslog() {
    return this.getBooleanAttribute('metricslog');
  }
  public set metricslog(value: boolean | cdktf.IResolvable) {
    this._metricslog = value;
  }
  public resetMetricslog() {
    this._metricslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricslogInput() {
    return this._metricslog;
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

  // pagetracking - computed: true, optional: true, required: false
  private _pagetracking?: string; 
  public get pagetracking() {
    return this.getStringAttribute('pagetracking');
  }
  public set pagetracking(value: string) {
    this._pagetracking = value;
  }
  public resetPagetracking() {
    this._pagetracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagetrackingInput() {
    return this._pagetracking;
  }

  // securityinsight - computed: true, optional: true, required: false
  private _securityinsight?: string; 
  public get securityinsight() {
    return this.getStringAttribute('securityinsight');
  }
  public set securityinsight(value: string) {
    this._securityinsight = value;
  }
  public resetSecurityinsight() {
    this._securityinsight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityinsightInput() {
    return this._securityinsight;
  }

  // transactionlog - computed: true, optional: true, required: false
  private _transactionlog?: string; 
  public get transactionlog() {
    return this.getStringAttribute('transactionlog');
  }
  public set transactionlog(value: string) {
    this._transactionlog = value;
  }
  public resetTransactionlog() {
    this._transactionlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionlogInput() {
    return this._transactionlog;
  }

  // videoanalytics - computed: true, optional: true, required: false
  private _videoanalytics?: string; 
  public get videoanalytics() {
    return this.getStringAttribute('videoanalytics');
  }
  public set videoanalytics(value: string) {
    this._videoanalytics = value;
  }
  public resetVideoanalytics() {
    this._videoanalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoanalyticsInput() {
    return this._videoanalytics;
  }

  // webinsight - computed: true, optional: true, required: false
  private _webinsight?: string; 
  public get webinsight() {
    return this.getStringAttribute('webinsight');
  }
  public set webinsight(value: string) {
    this._webinsight = value;
  }
  public resetWebinsight() {
    this._webinsight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webinsightInput() {
    return this._webinsight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      botinsight: cdktf.stringToTerraform(this._botinsight),
      ciinsight: cdktf.stringToTerraform(this._ciinsight),
      clientsidemeasurements: cdktf.stringToTerraform(this._clientsidemeasurements),
      collectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._collectors),
      comment: cdktf.stringToTerraform(this._comment),
      distributionalgorithm: cdktf.stringToTerraform(this._distributionalgorithm),
      id: cdktf.stringToTerraform(this._id),
      metricslog: cdktf.booleanToTerraform(this._metricslog),
      name: cdktf.stringToTerraform(this._name),
      pagetracking: cdktf.stringToTerraform(this._pagetracking),
      securityinsight: cdktf.stringToTerraform(this._securityinsight),
      transactionlog: cdktf.stringToTerraform(this._transactionlog),
      videoanalytics: cdktf.stringToTerraform(this._videoanalytics),
      webinsight: cdktf.stringToTerraform(this._webinsight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      botinsight: {
        value: cdktf.stringToHclTerraform(this._botinsight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciinsight: {
        value: cdktf.stringToHclTerraform(this._ciinsight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientsidemeasurements: {
        value: cdktf.stringToHclTerraform(this._clientsidemeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._collectors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distributionalgorithm: {
        value: cdktf.stringToHclTerraform(this._distributionalgorithm),
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
      metricslog: {
        value: cdktf.booleanToHclTerraform(this._metricslog),
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
      pagetracking: {
        value: cdktf.stringToHclTerraform(this._pagetracking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      securityinsight: {
        value: cdktf.stringToHclTerraform(this._securityinsight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transactionlog: {
        value: cdktf.stringToHclTerraform(this._transactionlog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      videoanalytics: {
        value: cdktf.stringToHclTerraform(this._videoanalytics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webinsight: {
        value: cdktf.stringToHclTerraform(this._webinsight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
