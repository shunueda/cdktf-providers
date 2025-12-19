// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_trustlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosNetworkObjectTrustlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_trustlist#id DdosNetworkObjectTrustlist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ObjectName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_trustlist#object_name DdosNetworkObjectTrustlist#object_name}
  */
  readonly objectName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_trustlist#uuid DdosNetworkObjectTrustlist#uuid}
  */
  readonly uuid?: string;
  /**
  * IPv4 Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_trustlist#v4_class_list DdosNetworkObjectTrustlist#v4_class_list}
  */
  readonly v4ClassList?: string;
  /**
  * IPv6 Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_trustlist#v6_class_list DdosNetworkObjectTrustlist#v6_class_list}
  */
  readonly v6ClassList?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_trustlist thunder_ddos_network_object_trustlist}
*/
export class DdosNetworkObjectTrustlist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_network_object_trustlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosNetworkObjectTrustlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosNetworkObjectTrustlist to import
  * @param importFromId The id of the existing DdosNetworkObjectTrustlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_trustlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosNetworkObjectTrustlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_network_object_trustlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_trustlist thunder_ddos_network_object_trustlist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosNetworkObjectTrustlistConfig
  */
  public constructor(scope: Construct, id: string, config: DdosNetworkObjectTrustlistConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_network_object_trustlist',
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
    this._objectName = config.objectName;
    this._uuid = config.uuid;
    this._v4ClassList = config.v4ClassList;
    this._v6ClassList = config.v6ClassList;
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

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // v4_class_list - computed: false, optional: true, required: false
  private _v4ClassList?: string; 
  public get v4ClassList() {
    return this.getStringAttribute('v4_class_list');
  }
  public set v4ClassList(value: string) {
    this._v4ClassList = value;
  }
  public resetV4ClassList() {
    this._v4ClassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4ClassListInput() {
    return this._v4ClassList;
  }

  // v6_class_list - computed: false, optional: true, required: false
  private _v6ClassList?: string; 
  public get v6ClassList() {
    return this.getStringAttribute('v6_class_list');
  }
  public set v6ClassList(value: string) {
    this._v6ClassList = value;
  }
  public resetV6ClassList() {
    this._v6ClassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6ClassListInput() {
    return this._v6ClassList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      object_name: cdktf.stringToTerraform(this._objectName),
      uuid: cdktf.stringToTerraform(this._uuid),
      v4_class_list: cdktf.stringToTerraform(this._v4ClassList),
      v6_class_list: cdktf.stringToTerraform(this._v6ClassList),
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
      object_name: {
        value: cdktf.stringToHclTerraform(this._objectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v4_class_list: {
        value: cdktf.stringToHclTerraform(this._v4ClassList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6_class_list: {
        value: cdktf.stringToHclTerraform(this._v6ClassList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
