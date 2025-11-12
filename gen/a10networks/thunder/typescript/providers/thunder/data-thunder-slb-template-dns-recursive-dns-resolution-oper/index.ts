// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_dns_recursive_dns_resolution_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbTemplateDnsRecursiveDnsResolutionOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_dns_recursive_dns_resolution_oper#id DataThunderSlbTemplateDnsRecursiveDnsResolutionOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_dns_recursive_dns_resolution_oper#name DataThunderSlbTemplateDnsRecursiveDnsResolutionOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_dns_recursive_dns_resolution_oper#oper DataThunderSlbTemplateDnsRecursiveDnsResolutionOper#oper}
  */
  readonly oper?: DataThunderSlbTemplateDnsRecursiveDnsResolutionOperOper;
}
export interface DataThunderSlbTemplateDnsRecursiveDnsResolutionOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_dns_recursive_dns_resolution_oper#gwhc_down_retries DataThunderSlbTemplateDnsRecursiveDnsResolutionOper#gwhc_down_retries}
  */
  readonly gwhcDownRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_dns_recursive_dns_resolution_oper#gwhc_status DataThunderSlbTemplateDnsRecursiveDnsResolutionOper#gwhc_status}
  */
  readonly gwhcStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_dns_recursive_dns_resolution_oper#gwhc_up_retries DataThunderSlbTemplateDnsRecursiveDnsResolutionOper#gwhc_up_retries}
  */
  readonly gwhcUpRetries?: number;
}

export function dataThunderSlbTemplateDnsRecursiveDnsResolutionOperOperToTerraform(struct?: DataThunderSlbTemplateDnsRecursiveDnsResolutionOperOperOutputReference | DataThunderSlbTemplateDnsRecursiveDnsResolutionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gwhc_down_retries: cdktf.numberToTerraform(struct!.gwhcDownRetries),
    gwhc_status: cdktf.stringToTerraform(struct!.gwhcStatus),
    gwhc_up_retries: cdktf.numberToTerraform(struct!.gwhcUpRetries),
  }
}


export function dataThunderSlbTemplateDnsRecursiveDnsResolutionOperOperToHclTerraform(struct?: DataThunderSlbTemplateDnsRecursiveDnsResolutionOperOperOutputReference | DataThunderSlbTemplateDnsRecursiveDnsResolutionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gwhc_down_retries: {
      value: cdktf.numberToHclTerraform(struct!.gwhcDownRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gwhc_status: {
      value: cdktf.stringToHclTerraform(struct!.gwhcStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gwhc_up_retries: {
      value: cdktf.numberToHclTerraform(struct!.gwhcUpRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbTemplateDnsRecursiveDnsResolutionOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbTemplateDnsRecursiveDnsResolutionOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gwhcDownRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwhcDownRetries = this._gwhcDownRetries;
    }
    if (this._gwhcStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwhcStatus = this._gwhcStatus;
    }
    if (this._gwhcUpRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwhcUpRetries = this._gwhcUpRetries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbTemplateDnsRecursiveDnsResolutionOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gwhcDownRetries = undefined;
      this._gwhcStatus = undefined;
      this._gwhcUpRetries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gwhcDownRetries = value.gwhcDownRetries;
      this._gwhcStatus = value.gwhcStatus;
      this._gwhcUpRetries = value.gwhcUpRetries;
    }
  }

  // gwhc_down_retries - computed: false, optional: true, required: false
  private _gwhcDownRetries?: number; 
  public get gwhcDownRetries() {
    return this.getNumberAttribute('gwhc_down_retries');
  }
  public set gwhcDownRetries(value: number) {
    this._gwhcDownRetries = value;
  }
  public resetGwhcDownRetries() {
    this._gwhcDownRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwhcDownRetriesInput() {
    return this._gwhcDownRetries;
  }

  // gwhc_status - computed: false, optional: true, required: false
  private _gwhcStatus?: string; 
  public get gwhcStatus() {
    return this.getStringAttribute('gwhc_status');
  }
  public set gwhcStatus(value: string) {
    this._gwhcStatus = value;
  }
  public resetGwhcStatus() {
    this._gwhcStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwhcStatusInput() {
    return this._gwhcStatus;
  }

  // gwhc_up_retries - computed: false, optional: true, required: false
  private _gwhcUpRetries?: number; 
  public get gwhcUpRetries() {
    return this.getNumberAttribute('gwhc_up_retries');
  }
  public set gwhcUpRetries(value: number) {
    this._gwhcUpRetries = value;
  }
  public resetGwhcUpRetries() {
    this._gwhcUpRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwhcUpRetriesInput() {
    return this._gwhcUpRetries;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_dns_recursive_dns_resolution_oper thunder_slb_template_dns_recursive_dns_resolution_oper}
*/
export class DataThunderSlbTemplateDnsRecursiveDnsResolutionOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_recursive_dns_resolution_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbTemplateDnsRecursiveDnsResolutionOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbTemplateDnsRecursiveDnsResolutionOper to import
  * @param importFromId The id of the existing DataThunderSlbTemplateDnsRecursiveDnsResolutionOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_dns_recursive_dns_resolution_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbTemplateDnsRecursiveDnsResolutionOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_recursive_dns_resolution_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_template_dns_recursive_dns_resolution_oper thunder_slb_template_dns_recursive_dns_resolution_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbTemplateDnsRecursiveDnsResolutionOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbTemplateDnsRecursiveDnsResolutionOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_recursive_dns_resolution_oper',
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
    this._name = config.name;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbTemplateDnsRecursiveDnsResolutionOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbTemplateDnsRecursiveDnsResolutionOperOper) {
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
      name: cdktf.stringToTerraform(this._name),
      oper: dataThunderSlbTemplateDnsRecursiveDnsResolutionOperOperToTerraform(this._oper.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderSlbTemplateDnsRecursiveDnsResolutionOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbTemplateDnsRecursiveDnsResolutionOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
