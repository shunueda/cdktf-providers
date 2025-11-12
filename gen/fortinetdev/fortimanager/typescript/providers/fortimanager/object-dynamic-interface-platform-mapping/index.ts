// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_platform_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectDynamicInterfacePlatformMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_platform_mapping#adom ObjectDynamicInterfacePlatformMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_platform_mapping#egress_shaping_profile ObjectDynamicInterfacePlatformMappingA#egress_shaping_profile}
  */
  readonly egressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_platform_mapping#id ObjectDynamicInterfacePlatformMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_platform_mapping#ingress_shaping_profile ObjectDynamicInterfacePlatformMappingA#ingress_shaping_profile}
  */
  readonly ingressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_platform_mapping#interface ObjectDynamicInterfacePlatformMappingA#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_platform_mapping#intf_zone ObjectDynamicInterfacePlatformMappingA#intf_zone}
  */
  readonly intfZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_platform_mapping#intrazone_deny ObjectDynamicInterfacePlatformMappingA#intrazone_deny}
  */
  readonly intrazoneDeny?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_platform_mapping#name ObjectDynamicInterfacePlatformMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_platform_mapping#scopetype ObjectDynamicInterfacePlatformMappingA#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_platform_mapping fortimanager_object_dynamic_interface_platform_mapping}
*/
export class ObjectDynamicInterfacePlatformMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_dynamic_interface_platform_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectDynamicInterfacePlatformMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectDynamicInterfacePlatformMappingA to import
  * @param importFromId The id of the existing ObjectDynamicInterfacePlatformMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_platform_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectDynamicInterfacePlatformMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_dynamic_interface_platform_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_platform_mapping fortimanager_object_dynamic_interface_platform_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectDynamicInterfacePlatformMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectDynamicInterfacePlatformMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_dynamic_interface_platform_mapping',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._egressShapingProfile = config.egressShapingProfile;
    this._id = config.id;
    this._ingressShapingProfile = config.ingressShapingProfile;
    this._interface = config.interface;
    this._intfZone = config.intfZone;
    this._intrazoneDeny = config.intrazoneDeny;
    this._name = config.name;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // egress_shaping_profile - computed: false, optional: true, required: false
  private _egressShapingProfile?: string; 
  public get egressShapingProfile() {
    return this.getStringAttribute('egress_shaping_profile');
  }
  public set egressShapingProfile(value: string) {
    this._egressShapingProfile = value;
  }
  public resetEgressShapingProfile() {
    this._egressShapingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressShapingProfileInput() {
    return this._egressShapingProfile;
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

  // ingress_shaping_profile - computed: false, optional: true, required: false
  private _ingressShapingProfile?: string; 
  public get ingressShapingProfile() {
    return this.getStringAttribute('ingress_shaping_profile');
  }
  public set ingressShapingProfile(value: string) {
    this._ingressShapingProfile = value;
  }
  public resetIngressShapingProfile() {
    this._ingressShapingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressShapingProfileInput() {
    return this._ingressShapingProfile;
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // intf_zone - computed: false, optional: true, required: false
  private _intfZone?: string; 
  public get intfZone() {
    return this.getStringAttribute('intf_zone');
  }
  public set intfZone(value: string) {
    this._intfZone = value;
  }
  public resetIntfZone() {
    this._intfZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfZoneInput() {
    return this._intfZone;
  }

  // intrazone_deny - computed: false, optional: true, required: false
  private _intrazoneDeny?: string; 
  public get intrazoneDeny() {
    return this.getStringAttribute('intrazone_deny');
  }
  public set intrazoneDeny(value: string) {
    this._intrazoneDeny = value;
  }
  public resetIntrazoneDeny() {
    this._intrazoneDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intrazoneDenyInput() {
    return this._intrazoneDeny;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      egress_shaping_profile: cdktf.stringToTerraform(this._egressShapingProfile),
      id: cdktf.stringToTerraform(this._id),
      ingress_shaping_profile: cdktf.stringToTerraform(this._ingressShapingProfile),
      interface: cdktf.stringToTerraform(this._interface),
      intf_zone: cdktf.stringToTerraform(this._intfZone),
      intrazone_deny: cdktf.stringToTerraform(this._intrazoneDeny),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_shaping_profile: {
        value: cdktf.stringToHclTerraform(this._egressShapingProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_shaping_profile: {
        value: cdktf.stringToHclTerraform(this._ingressShapingProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intf_zone: {
        value: cdktf.stringToHclTerraform(this._intfZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intrazone_deny: {
        value: cdktf.stringToHclTerraform(this._intrazoneDeny),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
