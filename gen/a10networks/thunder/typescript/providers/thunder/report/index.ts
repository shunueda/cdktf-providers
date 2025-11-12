// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report#id Report#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * debug block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report#debug Report#debug}
  */
  readonly debug?: ReportDebug;
}
export interface ReportDebugSflow {
  /**
  * Enable logs by parser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report#parser Report#parser}
  */
  readonly parser?: number;
  /**
  * Specify stats-oid to dump raw packets, 0 to disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report#stats_oid Report#stats_oid}
  */
  readonly statsOid?: number;
}

export function reportDebugSflowToTerraform(struct?: ReportDebugSflowOutputReference | ReportDebugSflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parser: cdktf.numberToTerraform(struct!.parser),
    stats_oid: cdktf.numberToTerraform(struct!.statsOid),
  }
}


export function reportDebugSflowToHclTerraform(struct?: ReportDebugSflowOutputReference | ReportDebugSflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parser: {
      value: cdktf.numberToHclTerraform(struct!.parser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stats_oid: {
      value: cdktf.numberToHclTerraform(struct!.statsOid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportDebugSflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportDebugSflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parser !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser;
    }
    if (this._statsOid !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsOid = this._statsOid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportDebugSflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parser = undefined;
      this._statsOid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parser = value.parser;
      this._statsOid = value.statsOid;
    }
  }

  // parser - computed: false, optional: true, required: false
  private _parser?: number; 
  public get parser() {
    return this.getNumberAttribute('parser');
  }
  public set parser(value: number) {
    this._parser = value;
  }
  public resetParser() {
    this._parser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser;
  }

  // stats_oid - computed: false, optional: true, required: false
  private _statsOid?: number; 
  public get statsOid() {
    return this.getNumberAttribute('stats_oid');
  }
  public set statsOid(value: number) {
    this._statsOid = value;
  }
  public resetStatsOid() {
    this._statsOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsOidInput() {
    return this._statsOid;
  }
}
export interface ReportDebug {
  /**
  * Enable Report module's normal logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report#log Report#log}
  */
  readonly log?: number;
  /**
  * sflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report#sflow Report#sflow}
  */
  readonly sflow?: ReportDebugSflow;
}

export function reportDebugToTerraform(struct?: ReportDebugOutputReference | ReportDebug): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.numberToTerraform(struct!.log),
    sflow: reportDebugSflowToTerraform(struct!.sflow),
  }
}


export function reportDebugToHclTerraform(struct?: ReportDebugOutputReference | ReportDebug): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow: {
      value: reportDebugSflowToHclTerraform(struct!.sflow),
      isBlock: true,
      type: "list",
      storageClassType: "ReportDebugSflowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportDebugOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportDebug | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._sflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflow = this._sflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportDebug | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._log = undefined;
      this._sflow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._log = value.log;
      this._sflow.internalValue = value.sflow;
    }
  }

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // sflow - computed: false, optional: true, required: false
  private _sflow = new ReportDebugSflowOutputReference(this, "sflow");
  public get sflow() {
    return this._sflow;
  }
  public putSflow(value: ReportDebugSflow) {
    this._sflow.internalValue = value;
  }
  public resetSflow() {
    this._sflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInput() {
    return this._sflow.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report thunder_report}
*/
export class Report extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Report resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Report to import
  * @param importFromId The id of the existing Report that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Report to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/report thunder_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ReportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_report',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._debug.internalValue = config.debug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // debug - computed: false, optional: true, required: false
  private _debug = new ReportDebugOutputReference(this, "debug");
  public get debug() {
    return this._debug;
  }
  public putDebug(value: ReportDebug) {
    this._debug.internalValue = value;
  }
  public resetDebug() {
    this._debug.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      debug: reportDebugToTerraform(this._debug.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug: {
        value: reportDebugToHclTerraform(this._debug.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportDebugList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
