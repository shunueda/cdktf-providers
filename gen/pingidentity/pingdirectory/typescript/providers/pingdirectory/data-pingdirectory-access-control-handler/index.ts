// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/access_control_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryAccessControlHandlerConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/access_control_handler pingdirectory_access_control_handler}
*/
export class DataPingdirectoryAccessControlHandler extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_access_control_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryAccessControlHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryAccessControlHandler to import
  * @param importFromId The id of the existing DataPingdirectoryAccessControlHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/access_control_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryAccessControlHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_access_control_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/access_control_handler pingdirectory_access_control_handler} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryAccessControlHandlerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryAccessControlHandlerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_access_control_handler',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_bind_control - computed: true, optional: false, required: false
  public get allowedBindControl() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_bind_control'));
  }

  // allowed_bind_control_oid - computed: true, optional: false, required: false
  public get allowedBindControlOid() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_bind_control_oid'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // evaluate_target_attribute_rights_for_add_operations - computed: true, optional: false, required: false
  public get evaluateTargetAttributeRightsForAddOperations() {
    return this.getBooleanAttribute('evaluate_target_attribute_rights_for_add_operations');
  }

  // global_aci - computed: true, optional: false, required: false
  public get globalAci() {
    return cdktf.Fn.tolist(this.getListAttribute('global_aci'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
