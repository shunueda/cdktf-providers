// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OkmsServiceKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Context of the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key#context OkmsServiceKey#context}
  */
  readonly context?: string;
  /**
  * Curve type for Elliptic Curve (EC) keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key#curve OkmsServiceKey#curve}
  */
  readonly curve?: string;
  /**
  * Key name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key#name OkmsServiceKey#name}
  */
  readonly name: string;
  /**
  * Okms ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key#okms_id OkmsServiceKey#okms_id}
  */
  readonly okmsId: string;
  /**
  * The operations for which the key is intended to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key#operations OkmsServiceKey#operations}
  */
  readonly operations: string[];
  /**
  * Size of the key to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key#size OkmsServiceKey#size}
  */
  readonly size?: number;
  /**
  * Type of the key to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key#type OkmsServiceKey#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key ovh_okms_service_key}
*/
export class OkmsServiceKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_okms_service_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OkmsServiceKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OkmsServiceKey to import
  * @param importFromId The id of the existing OkmsServiceKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OkmsServiceKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_okms_service_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key ovh_okms_service_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OkmsServiceKeyConfig
  */
  public constructor(scope: Construct, id: string, config: OkmsServiceKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_okms_service_key',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._context = config.context;
    this._curve = config.curve;
    this._name = config.name;
    this._okmsId = config.okmsId;
    this._operations = config.operations;
    this._size = config.size;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: true, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // curve - computed: true, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }

  // deactivation_reason - computed: true, optional: false, required: false
  public get deactivationReason() {
    return this.getStringAttribute('deactivation_reason');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // okms_id - computed: false, optional: false, required: true
  private _okmsId?: string; 
  public get okmsId() {
    return this.getStringAttribute('okms_id');
  }
  public set okmsId(value: string) {
    this._okmsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get okmsIdInput() {
    return this._okmsId;
  }

  // operations - computed: false, optional: false, required: true
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context: cdktf.stringToTerraform(this._context),
      curve: cdktf.stringToTerraform(this._curve),
      name: cdktf.stringToTerraform(this._name),
      okms_id: cdktf.stringToTerraform(this._okmsId),
      operations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operations),
      size: cdktf.numberToTerraform(this._size),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      curve: {
        value: cdktf.stringToHclTerraform(this._curve),
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
      okms_id: {
        value: cdktf.stringToHclTerraform(this._okmsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
