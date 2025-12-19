// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_persist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbPersistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_persist#id SlbPersist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_persist#uuid SlbPersist#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_persist#sampling_enable SlbPersist#sampling_enable}
  */
  readonly samplingEnable?: SlbPersistSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbPersistSamplingEnable {
  /**
  * 'all': all; 'hash_tbl_trylock_fail': Hash tbl lock fail; 'hash_tbl_create_ok': Hash tbl create ok; 'hash_tbl_create_fail': Hash tbl create fail; 'hash_tbl_free': Hash tbl free; 'hash_tbl_rst_updown': Hash tbl reset (up/down); 'hash_tbl_rst_adddel': Hash tbl reset (add/del); 'url_hash_pri': URL hash persist (pri); 'url_hash_enqueue': URL hash persist (enQ); 'url_hash_sec': URL hash persist (sec); 'url_hash_fail': URL hash persist fail; 'header_hash_pri': Header hash persist(pri); 'header_hash_enqueue': Header hash persist(enQ); 'header_hash_sec': Header hash persist(sec); 'header_hash_fail': Header hash persist fail; 'src_ip': SRC IP persist ok; 'src_ip_enqueue': SRC IP persist enqueue; 'src_ip_fail': SRC IP persist fail; 'src_ip_new_sess_cache': SRC IP new sess (cache); 'src_ip_new_sess_cache_fail': SRC IP new sess fail (c); 'src_ip_new_sess_sel': SRC IP new sess (select); 'src_ip_new_sess_sel_fail': SRC IP new sess fail (s); 'src_ip_hash_pri': SRC IP hash persist(pri); 'src_ip_hash_enqueue': SRC IP hash persist(enQ); 'src_ip_hash_sec': SRC IP hash persist(sec); 'src_ip_hash_fail': SRC IP hash persist fail; 'src_ip_enforce': Enforce higher priority; 'dst_ip': DST IP persist ok; 'dst_ip_enqueue': DST IP persist enqueue; 'dst_ip_fail': DST IP persist fail; 'dst_ip_new_sess_cache': DST IP new sess (cache); 'dst_ip_new_sess_cache_fail': DST IP new sess fail (c); 'dst_ip_new_sess_sel': DST IP new sess (select); 'dst_ip_new_sess_sel_fail': DST IP new sess fail (s); 'dst_ip_hash_pri': DST IP hash persist(pri); 'dst_ip_hash_enqueue': DST IP hash persist(enQ); 'dst_ip_hash_sec': DST IP hash persist(sec); 'dst_ip_hash_fail': DST IP hash persist fail; 'cssl_sid_not_found': Client SSL SID not found; 'cssl_sid_match': Client SSL SID match; 'cssl_sid_not_match': Client SSL SID not match; 'sssl_sid_not_found': Server SSL SID not found; 'sssl_sid_reset': Server SSL SID reset; 'sssl_sid_match': Server SSL SID match; 'sssl_sid_not_match': Server SSL SID not match; 'ssl_sid_persist_ok': SSL SID persist ok; 'ssl_sid_persist_fail': SSL SID persist fail; 'ssl_sid_session_ok': Create SSL SID ok; 'ssl_sid_session_fail': Create SSL SID fail; 'cookie_persist_ok': Cookie persist ok; 'cookie_persist_fail': Cookie persist fail; 'cookie_not_found': Persist cookie not found; 'cookie_pass_thru': Persist cookie Pass-thru; 'cookie_invalid': Invalid persist cookie;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_persist#counters1 SlbPersist#counters1}
  */
  readonly counters1?: string;
}

export function slbPersistSamplingEnableToTerraform(struct?: SlbPersistSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbPersistSamplingEnableToHclTerraform(struct?: SlbPersistSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbPersistSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SlbPersistSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbPersistSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbPersistSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbPersistSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SlbPersistSamplingEnableOutputReference {
    return new SlbPersistSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_persist thunder_slb_persist}
*/
export class SlbPersist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_persist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbPersist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbPersist to import
  * @param importFromId The id of the existing SlbPersist that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_persist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbPersist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_persist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_persist thunder_slb_persist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbPersistConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbPersistConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_persist',
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
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbPersistSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbPersistSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(slbPersistSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(slbPersistSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbPersistSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
