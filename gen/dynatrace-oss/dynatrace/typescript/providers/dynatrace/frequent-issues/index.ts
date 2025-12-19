// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/frequent_issues
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrequentIssuesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Detect frequent issues within applications, enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/frequent_issues#detect_apps FrequentIssues#detect_apps}
  */
  readonly detectApps: boolean | cdktf.IResolvable;
  /**
  * Events raised at this level typically occur when no specific topological entity is applicable, often based on data such as logs and metrics. This does not impact the detection of issues within applications, transactions, services, or infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/frequent_issues#detect_env FrequentIssues#detect_env}
  */
  readonly detectEnv?: boolean | cdktf.IResolvable;
  /**
  * Detect frequent issues within infrastructure, enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/frequent_issues#detect_infra FrequentIssues#detect_infra}
  */
  readonly detectInfra: boolean | cdktf.IResolvable;
  /**
  * Detect frequent issues within transactions and services, enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/frequent_issues#detect_txn FrequentIssues#detect_txn}
  */
  readonly detectTxn: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/frequent_issues#id FrequentIssues#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/frequent_issues dynatrace_frequent_issues}
*/
export class FrequentIssues extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_frequent_issues";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FrequentIssues resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FrequentIssues to import
  * @param importFromId The id of the existing FrequentIssues that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/frequent_issues#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FrequentIssues to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_frequent_issues", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/frequent_issues dynatrace_frequent_issues} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrequentIssuesConfig
  */
  public constructor(scope: Construct, id: string, config: FrequentIssuesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_frequent_issues',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._detectApps = config.detectApps;
    this._detectEnv = config.detectEnv;
    this._detectInfra = config.detectInfra;
    this._detectTxn = config.detectTxn;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // detect_apps - computed: false, optional: false, required: true
  private _detectApps?: boolean | cdktf.IResolvable; 
  public get detectApps() {
    return this.getBooleanAttribute('detect_apps');
  }
  public set detectApps(value: boolean | cdktf.IResolvable) {
    this._detectApps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectAppsInput() {
    return this._detectApps;
  }

  // detect_env - computed: false, optional: true, required: false
  private _detectEnv?: boolean | cdktf.IResolvable; 
  public get detectEnv() {
    return this.getBooleanAttribute('detect_env');
  }
  public set detectEnv(value: boolean | cdktf.IResolvable) {
    this._detectEnv = value;
  }
  public resetDetectEnv() {
    this._detectEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectEnvInput() {
    return this._detectEnv;
  }

  // detect_infra - computed: false, optional: false, required: true
  private _detectInfra?: boolean | cdktf.IResolvable; 
  public get detectInfra() {
    return this.getBooleanAttribute('detect_infra');
  }
  public set detectInfra(value: boolean | cdktf.IResolvable) {
    this._detectInfra = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectInfraInput() {
    return this._detectInfra;
  }

  // detect_txn - computed: false, optional: false, required: true
  private _detectTxn?: boolean | cdktf.IResolvable; 
  public get detectTxn() {
    return this.getBooleanAttribute('detect_txn');
  }
  public set detectTxn(value: boolean | cdktf.IResolvable) {
    this._detectTxn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectTxnInput() {
    return this._detectTxn;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detect_apps: cdktf.booleanToTerraform(this._detectApps),
      detect_env: cdktf.booleanToTerraform(this._detectEnv),
      detect_infra: cdktf.booleanToTerraform(this._detectInfra),
      detect_txn: cdktf.booleanToTerraform(this._detectTxn),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      detect_apps: {
        value: cdktf.booleanToHclTerraform(this._detectApps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_env: {
        value: cdktf.booleanToHclTerraform(this._detectEnv),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_infra: {
        value: cdktf.booleanToHclTerraform(this._detectInfra),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detect_txn: {
        value: cdktf.booleanToHclTerraform(this._detectTxn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
