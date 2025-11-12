// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/transaction_start_filters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransactionStartFiltersConfig extends cdktf.TerraformMetaArguments {
  /**
  * You can use * as wildcard. For example use A* to trace all transaction IDs that start with A.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/transaction_start_filters#cics_terminal_transaction_ids TransactionStartFilters#cics_terminal_transaction_ids}
  */
  readonly cicsTerminalTransactionIds?: string[];
  /**
  * You can use * as wildcard. For example use A* to trace all transaction IDs that start with A.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/transaction_start_filters#cics_transaction_ids TransactionStartFilters#cics_transaction_ids}
  */
  readonly cicsTransactionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/transaction_start_filters#id TransactionStartFilters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * You can use * as wildcard. For example use A* to trace all transaction IDs that start with A.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/transaction_start_filters#ims_terminal_transaction_ids TransactionStartFilters#ims_terminal_transaction_ids}
  */
  readonly imsTerminalTransactionIds?: string[];
  /**
  * You can use * as wildcard. For example use A* to trace all transaction IDs that start with A.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/transaction_start_filters#ims_transaction_ids TransactionStartFilters#ims_transaction_ids}
  */
  readonly imsTransactionIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/transaction_start_filters dynatrace_transaction_start_filters}
*/
export class TransactionStartFilters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_transaction_start_filters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransactionStartFilters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransactionStartFilters to import
  * @param importFromId The id of the existing TransactionStartFilters that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/transaction_start_filters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransactionStartFilters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_transaction_start_filters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/transaction_start_filters dynatrace_transaction_start_filters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransactionStartFiltersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TransactionStartFiltersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_transaction_start_filters',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cicsTerminalTransactionIds = config.cicsTerminalTransactionIds;
    this._cicsTransactionIds = config.cicsTransactionIds;
    this._id = config.id;
    this._imsTerminalTransactionIds = config.imsTerminalTransactionIds;
    this._imsTransactionIds = config.imsTransactionIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cics_terminal_transaction_ids - computed: false, optional: true, required: false
  private _cicsTerminalTransactionIds?: string[]; 
  public get cicsTerminalTransactionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cics_terminal_transaction_ids'));
  }
  public set cicsTerminalTransactionIds(value: string[]) {
    this._cicsTerminalTransactionIds = value;
  }
  public resetCicsTerminalTransactionIds() {
    this._cicsTerminalTransactionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cicsTerminalTransactionIdsInput() {
    return this._cicsTerminalTransactionIds;
  }

  // cics_transaction_ids - computed: false, optional: true, required: false
  private _cicsTransactionIds?: string[]; 
  public get cicsTransactionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cics_transaction_ids'));
  }
  public set cicsTransactionIds(value: string[]) {
    this._cicsTransactionIds = value;
  }
  public resetCicsTransactionIds() {
    this._cicsTransactionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cicsTransactionIdsInput() {
    return this._cicsTransactionIds;
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

  // ims_terminal_transaction_ids - computed: false, optional: true, required: false
  private _imsTerminalTransactionIds?: string[]; 
  public get imsTerminalTransactionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ims_terminal_transaction_ids'));
  }
  public set imsTerminalTransactionIds(value: string[]) {
    this._imsTerminalTransactionIds = value;
  }
  public resetImsTerminalTransactionIds() {
    this._imsTerminalTransactionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsTerminalTransactionIdsInput() {
    return this._imsTerminalTransactionIds;
  }

  // ims_transaction_ids - computed: false, optional: true, required: false
  private _imsTransactionIds?: string[]; 
  public get imsTransactionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ims_transaction_ids'));
  }
  public set imsTransactionIds(value: string[]) {
    this._imsTransactionIds = value;
  }
  public resetImsTransactionIds() {
    this._imsTransactionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsTransactionIdsInput() {
    return this._imsTransactionIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cics_terminal_transaction_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cicsTerminalTransactionIds),
      cics_transaction_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cicsTransactionIds),
      id: cdktf.stringToTerraform(this._id),
      ims_terminal_transaction_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._imsTerminalTransactionIds),
      ims_transaction_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._imsTransactionIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cics_terminal_transaction_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cicsTerminalTransactionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cics_transaction_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cicsTransactionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ims_terminal_transaction_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._imsTerminalTransactionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ims_transaction_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._imsTransactionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
