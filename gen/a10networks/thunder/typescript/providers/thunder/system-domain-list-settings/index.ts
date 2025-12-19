// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_domain_list_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDomainListSettingsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure max concurrent AXFR task (Default 6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_domain_list_settings#concurrent_task SystemDomainListSettingsA#concurrent_task}
  */
  readonly concurrentTask?: number;
  /**
  * '16': Allow 16 domain-list per group (Default); '32': Allow 32 domain-list per group;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_domain_list_settings#domain_list_per_group SystemDomainListSettingsA#domain_list_per_group}
  */
  readonly domainListPerGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_domain_list_settings#id SystemDomainListSettingsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * '1-second': Set interval to 1 second; '5-second': Set interval to 5 seconds; '10-second': Set interval to 10 seconds (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_domain_list_settings#polling_interval SystemDomainListSettingsA#polling_interval}
  */
  readonly pollingInterval?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_domain_list_settings#uuid SystemDomainListSettingsA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_domain_list_settings thunder_system_domain_list_settings}
*/
export class SystemDomainListSettingsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_domain_list_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDomainListSettingsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDomainListSettingsA to import
  * @param importFromId The id of the existing SystemDomainListSettingsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_domain_list_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDomainListSettingsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_domain_list_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_domain_list_settings thunder_system_domain_list_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDomainListSettingsAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDomainListSettingsAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_domain_list_settings',
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
    this._concurrentTask = config.concurrentTask;
    this._domainListPerGroup = config.domainListPerGroup;
    this._id = config.id;
    this._pollingInterval = config.pollingInterval;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // concurrent_task - computed: false, optional: true, required: false
  private _concurrentTask?: number; 
  public get concurrentTask() {
    return this.getNumberAttribute('concurrent_task');
  }
  public set concurrentTask(value: number) {
    this._concurrentTask = value;
  }
  public resetConcurrentTask() {
    this._concurrentTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentTaskInput() {
    return this._concurrentTask;
  }

  // domain_list_per_group - computed: false, optional: true, required: false
  private _domainListPerGroup?: string; 
  public get domainListPerGroup() {
    return this.getStringAttribute('domain_list_per_group');
  }
  public set domainListPerGroup(value: string) {
    this._domainListPerGroup = value;
  }
  public resetDomainListPerGroup() {
    this._domainListPerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListPerGroupInput() {
    return this._domainListPerGroup;
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

  // polling_interval - computed: false, optional: true, required: false
  private _pollingInterval?: string; 
  public get pollingInterval() {
    return this.getStringAttribute('polling_interval');
  }
  public set pollingInterval(value: string) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      concurrent_task: cdktf.numberToTerraform(this._concurrentTask),
      domain_list_per_group: cdktf.stringToTerraform(this._domainListPerGroup),
      id: cdktf.stringToTerraform(this._id),
      polling_interval: cdktf.stringToTerraform(this._pollingInterval),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      concurrent_task: {
        value: cdktf.numberToHclTerraform(this._concurrentTask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_list_per_group: {
        value: cdktf.stringToHclTerraform(this._domainListPerGroup),
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
      polling_interval: {
        value: cdktf.stringToHclTerraform(this._pollingInterval),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
