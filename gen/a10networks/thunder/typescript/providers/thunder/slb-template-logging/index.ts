// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'auto': Configure auto NAT for logging, default is auto enabled;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#auto SlbTemplateLogging#auto}
  */
  readonly auto?: string;
  /**
  * Specify a format string for web logging (format string(less than 250 characters) for web logging)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#format SlbTemplateLogging#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#id SlbTemplateLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of unmasked characters at the end (default: 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#keep_end SlbTemplateLogging#keep_end}
  */
  readonly keepEnd?: number;
  /**
  * Number of unmasked characters at the beginning (default: 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#keep_start SlbTemplateLogging#keep_start}
  */
  readonly keepStart?: number;
  /**
  * 1 to enable local logging (1 to enable local logging, default 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#local_logging SlbTemplateLogging#local_logging}
  */
  readonly localLogging?: number;
  /**
  * Character to mask the matched pattern (default: X)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#mask SlbTemplateLogging#mask}
  */
  readonly mask?: string;
  /**
  * Logging Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#name SlbTemplateLogging#name}
  */
  readonly name: string;
  /**
  * Mask matched PCRE pattern in the log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#pcre_mask SlbTemplateLogging#pcre_mask}
  */
  readonly pcreMask?: string;
  /**
  * Specify NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#pool SlbTemplateLogging#pool}
  */
  readonly pool?: string;
  /**
  * Specify NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#pool_shared SlbTemplateLogging#pool_shared}
  */
  readonly poolShared?: string;
  /**
  * Bind a Service Group to the logging template (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#service_group SlbTemplateLogging#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * Reference a NAT pool or pool group from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#shared_partition_pool SlbTemplateLogging#shared_partition_pool}
  */
  readonly sharedPartitionPool?: number;
  /**
  * Reference a TCP Proxy template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#shared_partition_tcp_proxy_template SlbTemplateLogging#shared_partition_tcp_proxy_template}
  */
  readonly sharedPartitionTcpProxyTemplate?: number;
  /**
  * TCP Proxy Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#tcp_proxy SlbTemplateLogging#tcp_proxy}
  */
  readonly tcpProxy?: string;
  /**
  * TCP Proxy Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#template_tcp_proxy_shared SlbTemplateLogging#template_tcp_proxy_shared}
  */
  readonly templateTcpProxyShared?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#user_tag SlbTemplateLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#uuid SlbTemplateLogging#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging thunder_slb_template_logging}
*/
export class SlbTemplateLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateLogging to import
  * @param importFromId The id of the existing SlbTemplateLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_logging thunder_slb_template_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_logging',
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
    this._auto = config.auto;
    this._format = config.format;
    this._id = config.id;
    this._keepEnd = config.keepEnd;
    this._keepStart = config.keepStart;
    this._localLogging = config.localLogging;
    this._mask = config.mask;
    this._name = config.name;
    this._pcreMask = config.pcreMask;
    this._pool = config.pool;
    this._poolShared = config.poolShared;
    this._serviceGroup = config.serviceGroup;
    this._sharedPartitionPool = config.sharedPartitionPool;
    this._sharedPartitionTcpProxyTemplate = config.sharedPartitionTcpProxyTemplate;
    this._tcpProxy = config.tcpProxy;
    this._templateTcpProxyShared = config.templateTcpProxyShared;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto - computed: false, optional: true, required: false
  private _auto?: string; 
  public get auto() {
    return this.getStringAttribute('auto');
  }
  public set auto(value: string) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // keep_end - computed: false, optional: true, required: false
  private _keepEnd?: number; 
  public get keepEnd() {
    return this.getNumberAttribute('keep_end');
  }
  public set keepEnd(value: number) {
    this._keepEnd = value;
  }
  public resetKeepEnd() {
    this._keepEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepEndInput() {
    return this._keepEnd;
  }

  // keep_start - computed: false, optional: true, required: false
  private _keepStart?: number; 
  public get keepStart() {
    return this.getNumberAttribute('keep_start');
  }
  public set keepStart(value: number) {
    this._keepStart = value;
  }
  public resetKeepStart() {
    this._keepStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepStartInput() {
    return this._keepStart;
  }

  // local_logging - computed: false, optional: true, required: false
  private _localLogging?: number; 
  public get localLogging() {
    return this.getNumberAttribute('local_logging');
  }
  public set localLogging(value: number) {
    this._localLogging = value;
  }
  public resetLocalLogging() {
    this._localLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLoggingInput() {
    return this._localLogging;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
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

  // pcre_mask - computed: false, optional: true, required: false
  private _pcreMask?: string; 
  public get pcreMask() {
    return this.getStringAttribute('pcre_mask');
  }
  public set pcreMask(value: string) {
    this._pcreMask = value;
  }
  public resetPcreMask() {
    this._pcreMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcreMaskInput() {
    return this._pcreMask;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // pool_shared - computed: false, optional: true, required: false
  private _poolShared?: string; 
  public get poolShared() {
    return this.getStringAttribute('pool_shared');
  }
  public set poolShared(value: string) {
    this._poolShared = value;
  }
  public resetPoolShared() {
    this._poolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSharedInput() {
    return this._poolShared;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // shared_partition_pool - computed: false, optional: true, required: false
  private _sharedPartitionPool?: number; 
  public get sharedPartitionPool() {
    return this.getNumberAttribute('shared_partition_pool');
  }
  public set sharedPartitionPool(value: number) {
    this._sharedPartitionPool = value;
  }
  public resetSharedPartitionPool() {
    this._sharedPartitionPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPoolInput() {
    return this._sharedPartitionPool;
  }

  // shared_partition_tcp_proxy_template - computed: false, optional: true, required: false
  private _sharedPartitionTcpProxyTemplate?: number; 
  public get sharedPartitionTcpProxyTemplate() {
    return this.getNumberAttribute('shared_partition_tcp_proxy_template');
  }
  public set sharedPartitionTcpProxyTemplate(value: number) {
    this._sharedPartitionTcpProxyTemplate = value;
  }
  public resetSharedPartitionTcpProxyTemplate() {
    this._sharedPartitionTcpProxyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionTcpProxyTemplateInput() {
    return this._sharedPartitionTcpProxyTemplate;
  }

  // tcp_proxy - computed: false, optional: true, required: false
  private _tcpProxy?: string; 
  public get tcpProxy() {
    return this.getStringAttribute('tcp_proxy');
  }
  public set tcpProxy(value: string) {
    this._tcpProxy = value;
  }
  public resetTcpProxy() {
    this._tcpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProxyInput() {
    return this._tcpProxy;
  }

  // template_tcp_proxy_shared - computed: false, optional: true, required: false
  private _templateTcpProxyShared?: string; 
  public get templateTcpProxyShared() {
    return this.getStringAttribute('template_tcp_proxy_shared');
  }
  public set templateTcpProxyShared(value: string) {
    this._templateTcpProxyShared = value;
  }
  public resetTemplateTcpProxyShared() {
    this._templateTcpProxyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpProxySharedInput() {
    return this._templateTcpProxyShared;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
      auto: cdktf.stringToTerraform(this._auto),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      keep_end: cdktf.numberToTerraform(this._keepEnd),
      keep_start: cdktf.numberToTerraform(this._keepStart),
      local_logging: cdktf.numberToTerraform(this._localLogging),
      mask: cdktf.stringToTerraform(this._mask),
      name: cdktf.stringToTerraform(this._name),
      pcre_mask: cdktf.stringToTerraform(this._pcreMask),
      pool: cdktf.stringToTerraform(this._pool),
      pool_shared: cdktf.stringToTerraform(this._poolShared),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      shared_partition_pool: cdktf.numberToTerraform(this._sharedPartitionPool),
      shared_partition_tcp_proxy_template: cdktf.numberToTerraform(this._sharedPartitionTcpProxyTemplate),
      tcp_proxy: cdktf.stringToTerraform(this._tcpProxy),
      template_tcp_proxy_shared: cdktf.stringToTerraform(this._templateTcpProxyShared),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto: {
        value: cdktf.stringToHclTerraform(this._auto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      keep_end: {
        value: cdktf.numberToHclTerraform(this._keepEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keep_start: {
        value: cdktf.numberToHclTerraform(this._keepStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_logging: {
        value: cdktf.numberToHclTerraform(this._localLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mask: {
        value: cdktf.stringToHclTerraform(this._mask),
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
      pcre_mask: {
        value: cdktf.stringToHclTerraform(this._pcreMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_shared: {
        value: cdktf.stringToHclTerraform(this._poolShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_partition_pool: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionPool),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_tcp_proxy_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionTcpProxyTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_proxy: {
        value: cdktf.stringToHclTerraform(this._tcpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_tcp_proxy_shared: {
        value: cdktf.stringToHclTerraform(this._templateTcpProxyShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
