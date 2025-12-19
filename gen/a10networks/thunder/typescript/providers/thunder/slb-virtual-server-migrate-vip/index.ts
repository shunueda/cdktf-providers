// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_migrate_vip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbVirtualServerMigrateVipAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cancel migration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_migrate_vip#cancel_migration SlbVirtualServerMigrateVipA#cancel_migration}
  */
  readonly cancelMigration?: number;
  /**
  * Complete the migration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_migrate_vip#finish_migration SlbVirtualServerMigrateVipA#finish_migration}
  */
  readonly finishMigration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_migrate_vip#id SlbVirtualServerMigrateVipA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of CPUs on the target platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_migrate_vip#target_data_cpu SlbVirtualServerMigrateVipA#target_data_cpu}
  */
  readonly targetDataCpu?: number;
  /**
  * Specify IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_migrate_vip#target_floating_ipv4 SlbVirtualServerMigrateVipA#target_floating_ipv4}
  */
  readonly targetFloatingIpv4?: string;
  /**
  * Specify IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_migrate_vip#target_floating_ipv6 SlbVirtualServerMigrateVipA#target_floating_ipv6}
  */
  readonly targetFloatingIpv6?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_migrate_vip#uuid SlbVirtualServerMigrateVipA#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual_server_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_migrate_vip#virtual_server_name SlbVirtualServerMigrateVipA#virtual_server_name}
  */
  readonly virtualServerName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_migrate_vip thunder_slb_virtual_server_migrate_vip}
*/
export class SlbVirtualServerMigrateVipA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_virtual_server_migrate_vip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbVirtualServerMigrateVipA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbVirtualServerMigrateVipA to import
  * @param importFromId The id of the existing SlbVirtualServerMigrateVipA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_migrate_vip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbVirtualServerMigrateVipA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_virtual_server_migrate_vip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_migrate_vip thunder_slb_virtual_server_migrate_vip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbVirtualServerMigrateVipAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbVirtualServerMigrateVipAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_virtual_server_migrate_vip',
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
    this._cancelMigration = config.cancelMigration;
    this._finishMigration = config.finishMigration;
    this._id = config.id;
    this._targetDataCpu = config.targetDataCpu;
    this._targetFloatingIpv4 = config.targetFloatingIpv4;
    this._targetFloatingIpv6 = config.targetFloatingIpv6;
    this._uuid = config.uuid;
    this._virtualServerName = config.virtualServerName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cancel_migration - computed: false, optional: true, required: false
  private _cancelMigration?: number; 
  public get cancelMigration() {
    return this.getNumberAttribute('cancel_migration');
  }
  public set cancelMigration(value: number) {
    this._cancelMigration = value;
  }
  public resetCancelMigration() {
    this._cancelMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelMigrationInput() {
    return this._cancelMigration;
  }

  // finish_migration - computed: false, optional: true, required: false
  private _finishMigration?: number; 
  public get finishMigration() {
    return this.getNumberAttribute('finish_migration');
  }
  public set finishMigration(value: number) {
    this._finishMigration = value;
  }
  public resetFinishMigration() {
    this._finishMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishMigrationInput() {
    return this._finishMigration;
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

  // target_data_cpu - computed: false, optional: true, required: false
  private _targetDataCpu?: number; 
  public get targetDataCpu() {
    return this.getNumberAttribute('target_data_cpu');
  }
  public set targetDataCpu(value: number) {
    this._targetDataCpu = value;
  }
  public resetTargetDataCpu() {
    this._targetDataCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDataCpuInput() {
    return this._targetDataCpu;
  }

  // target_floating_ipv4 - computed: false, optional: true, required: false
  private _targetFloatingIpv4?: string; 
  public get targetFloatingIpv4() {
    return this.getStringAttribute('target_floating_ipv4');
  }
  public set targetFloatingIpv4(value: string) {
    this._targetFloatingIpv4 = value;
  }
  public resetTargetFloatingIpv4() {
    this._targetFloatingIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFloatingIpv4Input() {
    return this._targetFloatingIpv4;
  }

  // target_floating_ipv6 - computed: false, optional: true, required: false
  private _targetFloatingIpv6?: string; 
  public get targetFloatingIpv6() {
    return this.getStringAttribute('target_floating_ipv6');
  }
  public set targetFloatingIpv6(value: string) {
    this._targetFloatingIpv6 = value;
  }
  public resetTargetFloatingIpv6() {
    this._targetFloatingIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFloatingIpv6Input() {
    return this._targetFloatingIpv6;
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

  // virtual_server_name - computed: false, optional: false, required: true
  private _virtualServerName?: string; 
  public get virtualServerName() {
    return this.getStringAttribute('virtual_server_name');
  }
  public set virtualServerName(value: string) {
    this._virtualServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerNameInput() {
    return this._virtualServerName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cancel_migration: cdktf.numberToTerraform(this._cancelMigration),
      finish_migration: cdktf.numberToTerraform(this._finishMigration),
      id: cdktf.stringToTerraform(this._id),
      target_data_cpu: cdktf.numberToTerraform(this._targetDataCpu),
      target_floating_ipv4: cdktf.stringToTerraform(this._targetFloatingIpv4),
      target_floating_ipv6: cdktf.stringToTerraform(this._targetFloatingIpv6),
      uuid: cdktf.stringToTerraform(this._uuid),
      virtual_server_name: cdktf.stringToTerraform(this._virtualServerName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cancel_migration: {
        value: cdktf.numberToHclTerraform(this._cancelMigration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      finish_migration: {
        value: cdktf.numberToHclTerraform(this._finishMigration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_data_cpu: {
        value: cdktf.numberToHclTerraform(this._targetDataCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_floating_ipv4: {
        value: cdktf.stringToHclTerraform(this._targetFloatingIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_floating_ipv6: {
        value: cdktf.stringToHclTerraform(this._targetFloatingIpv6),
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
      virtual_server_name: {
        value: cdktf.stringToHclTerraform(this._virtualServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
