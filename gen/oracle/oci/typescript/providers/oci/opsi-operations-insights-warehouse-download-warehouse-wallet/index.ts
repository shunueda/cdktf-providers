// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_id}
  */
  readonly operationsInsightsWarehouseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_wallet_password OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_wallet_password}
  */
  readonly operationsInsightsWarehouseWalletPassword: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#timeouts OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#timeouts}
  */
  readonly timeouts?: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts;
}
export interface OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#create OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#delete OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#update OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#update}
  */
  readonly update?: string;
}

export function opsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsToTerraform(struct?: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function opsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsToHclTerraform(struct?: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet oci_opsi_operations_insights_warehouse_download_warehouse_wallet}
*/
export class OpsiOperationsInsightsWarehouseDownloadWarehouseWallet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_operations_insights_warehouse_download_warehouse_wallet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpsiOperationsInsightsWarehouseDownloadWarehouseWallet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpsiOperationsInsightsWarehouseDownloadWarehouseWallet to import
  * @param importFromId The id of the existing OpsiOperationsInsightsWarehouseDownloadWarehouseWallet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpsiOperationsInsightsWarehouseDownloadWarehouseWallet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_operations_insights_warehouse_download_warehouse_wallet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet oci_opsi_operations_insights_warehouse_download_warehouse_wallet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig
  */
  public constructor(scope: Construct, id: string, config: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_operations_insights_warehouse_download_warehouse_wallet',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._operationsInsightsWarehouseId = config.operationsInsightsWarehouseId;
    this._operationsInsightsWarehouseWalletPassword = config.operationsInsightsWarehouseWalletPassword;
    this._timeouts.internalValue = config.timeouts;
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

  // operations_insights_warehouse_id - computed: false, optional: false, required: true
  private _operationsInsightsWarehouseId?: string; 
  public get operationsInsightsWarehouseId() {
    return this.getStringAttribute('operations_insights_warehouse_id');
  }
  public set operationsInsightsWarehouseId(value: string) {
    this._operationsInsightsWarehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInsightsWarehouseIdInput() {
    return this._operationsInsightsWarehouseId;
  }

  // operations_insights_warehouse_wallet_password - computed: false, optional: false, required: true
  private _operationsInsightsWarehouseWalletPassword?: string; 
  public get operationsInsightsWarehouseWalletPassword() {
    return this.getStringAttribute('operations_insights_warehouse_wallet_password');
  }
  public set operationsInsightsWarehouseWalletPassword(value: string) {
    this._operationsInsightsWarehouseWalletPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInsightsWarehouseWalletPasswordInput() {
    return this._operationsInsightsWarehouseWalletPassword;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      operations_insights_warehouse_id: cdktf.stringToTerraform(this._operationsInsightsWarehouseId),
      operations_insights_warehouse_wallet_password: cdktf.stringToTerraform(this._operationsInsightsWarehouseWalletPassword),
      timeouts: opsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsToTerraform(this._timeouts.internalValue),
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
      operations_insights_warehouse_id: {
        value: cdktf.stringToHclTerraform(this._operationsInsightsWarehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operations_insights_warehouse_wallet_password: {
        value: cdktf.stringToHclTerraform(this._operationsInsightsWarehouseWalletPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: opsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
