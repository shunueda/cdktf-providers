// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_backup_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemViewShowBackupOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_backup_oper#id DataThunderSystemViewShowBackupOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_backup_oper#oper DataThunderSystemViewShowBackupOper#oper}
  */
  readonly oper?: DataThunderSystemViewShowBackupOperOper;
}
export interface DataThunderSystemViewShowBackupOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_backup_oper#backup_show_1 DataThunderSystemViewShowBackupOper#backup_show_1}
  */
  readonly backupShow1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_backup_oper#backup_show_2 DataThunderSystemViewShowBackupOper#backup_show_2}
  */
  readonly backupShow2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_backup_oper#backup_show_3 DataThunderSystemViewShowBackupOper#backup_show_3}
  */
  readonly backupShow3?: string;
}

export function dataThunderSystemViewShowBackupOperOperToTerraform(struct?: DataThunderSystemViewShowBackupOperOperOutputReference | DataThunderSystemViewShowBackupOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_show_1: cdktf.stringToTerraform(struct!.backupShow1),
    backup_show_2: cdktf.stringToTerraform(struct!.backupShow2),
    backup_show_3: cdktf.stringToTerraform(struct!.backupShow3),
  }
}


export function dataThunderSystemViewShowBackupOperOperToHclTerraform(struct?: DataThunderSystemViewShowBackupOperOperOutputReference | DataThunderSystemViewShowBackupOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_show_1: {
      value: cdktf.stringToHclTerraform(struct!.backupShow1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_show_2: {
      value: cdktf.stringToHclTerraform(struct!.backupShow2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_show_3: {
      value: cdktf.stringToHclTerraform(struct!.backupShow3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewShowBackupOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemViewShowBackupOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupShow1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupShow1 = this._backupShow1;
    }
    if (this._backupShow2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupShow2 = this._backupShow2;
    }
    if (this._backupShow3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupShow3 = this._backupShow3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewShowBackupOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupShow1 = undefined;
      this._backupShow2 = undefined;
      this._backupShow3 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupShow1 = value.backupShow1;
      this._backupShow2 = value.backupShow2;
      this._backupShow3 = value.backupShow3;
    }
  }

  // backup_show_1 - computed: false, optional: true, required: false
  private _backupShow1?: string; 
  public get backupShow1() {
    return this.getStringAttribute('backup_show_1');
  }
  public set backupShow1(value: string) {
    this._backupShow1 = value;
  }
  public resetBackupShow1() {
    this._backupShow1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupShow1Input() {
    return this._backupShow1;
  }

  // backup_show_2 - computed: false, optional: true, required: false
  private _backupShow2?: string; 
  public get backupShow2() {
    return this.getStringAttribute('backup_show_2');
  }
  public set backupShow2(value: string) {
    this._backupShow2 = value;
  }
  public resetBackupShow2() {
    this._backupShow2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupShow2Input() {
    return this._backupShow2;
  }

  // backup_show_3 - computed: false, optional: true, required: false
  private _backupShow3?: string; 
  public get backupShow3() {
    return this.getStringAttribute('backup_show_3');
  }
  public set backupShow3(value: string) {
    this._backupShow3 = value;
  }
  public resetBackupShow3() {
    this._backupShow3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupShow3Input() {
    return this._backupShow3;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_backup_oper thunder_system_view_show_backup_oper}
*/
export class DataThunderSystemViewShowBackupOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_view_show_backup_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemViewShowBackupOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemViewShowBackupOper to import
  * @param importFromId The id of the existing DataThunderSystemViewShowBackupOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_backup_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemViewShowBackupOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_view_show_backup_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_backup_oper thunder_system_view_show_backup_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemViewShowBackupOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemViewShowBackupOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_view_show_backup_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSystemViewShowBackupOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemViewShowBackupOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSystemViewShowBackupOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSystemViewShowBackupOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemViewShowBackupOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
