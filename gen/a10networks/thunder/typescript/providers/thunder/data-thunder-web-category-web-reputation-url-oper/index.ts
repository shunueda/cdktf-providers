// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_url_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderWebCategoryWebReputationUrlOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_url_oper#id DataThunderWebCategoryWebReputationUrlOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_url_oper#oper DataThunderWebCategoryWebReputationUrlOper#oper}
  */
  readonly oper?: DataThunderWebCategoryWebReputationUrlOperOper;
}
export interface DataThunderWebCategoryWebReputationUrlOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_url_oper#local_db_only DataThunderWebCategoryWebReputationUrlOper#local_db_only}
  */
  readonly localDbOnly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_url_oper#name DataThunderWebCategoryWebReputationUrlOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_url_oper#reputation_score DataThunderWebCategoryWebReputationUrlOper#reputation_score}
  */
  readonly reputationScore?: string;
}

export function dataThunderWebCategoryWebReputationUrlOperOperToTerraform(struct?: DataThunderWebCategoryWebReputationUrlOperOperOutputReference | DataThunderWebCategoryWebReputationUrlOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_db_only: cdktf.numberToTerraform(struct!.localDbOnly),
    name: cdktf.stringToTerraform(struct!.name),
    reputation_score: cdktf.stringToTerraform(struct!.reputationScore),
  }
}


export function dataThunderWebCategoryWebReputationUrlOperOperToHclTerraform(struct?: DataThunderWebCategoryWebReputationUrlOperOperOutputReference | DataThunderWebCategoryWebReputationUrlOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_db_only: {
      value: cdktf.numberToHclTerraform(struct!.localDbOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reputation_score: {
      value: cdktf.stringToHclTerraform(struct!.reputationScore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryWebReputationUrlOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryWebReputationUrlOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localDbOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDbOnly = this._localDbOnly;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reputationScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.reputationScore = this._reputationScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryWebReputationUrlOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localDbOnly = undefined;
      this._name = undefined;
      this._reputationScore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localDbOnly = value.localDbOnly;
      this._name = value.name;
      this._reputationScore = value.reputationScore;
    }
  }

  // local_db_only - computed: false, optional: true, required: false
  private _localDbOnly?: number; 
  public get localDbOnly() {
    return this.getNumberAttribute('local_db_only');
  }
  public set localDbOnly(value: number) {
    this._localDbOnly = value;
  }
  public resetLocalDbOnly() {
    this._localDbOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDbOnlyInput() {
    return this._localDbOnly;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // reputation_score - computed: false, optional: true, required: false
  private _reputationScore?: string; 
  public get reputationScore() {
    return this.getStringAttribute('reputation_score');
  }
  public set reputationScore(value: string) {
    this._reputationScore = value;
  }
  public resetReputationScore() {
    this._reputationScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationScoreInput() {
    return this._reputationScore;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_url_oper thunder_web_category_web_reputation_url_oper}
*/
export class DataThunderWebCategoryWebReputationUrlOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category_web_reputation_url_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderWebCategoryWebReputationUrlOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderWebCategoryWebReputationUrlOper to import
  * @param importFromId The id of the existing DataThunderWebCategoryWebReputationUrlOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_url_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderWebCategoryWebReputationUrlOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category_web_reputation_url_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_url_oper thunder_web_category_web_reputation_url_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderWebCategoryWebReputationUrlOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderWebCategoryWebReputationUrlOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category_web_reputation_url_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
  private _oper = new DataThunderWebCategoryWebReputationUrlOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryWebReputationUrlOperOper) {
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
      oper: dataThunderWebCategoryWebReputationUrlOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderWebCategoryWebReputationUrlOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryWebReputationUrlOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
