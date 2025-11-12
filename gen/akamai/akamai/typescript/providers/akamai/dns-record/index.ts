// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#algorithm DnsRecord#algorithm}
  */
  readonly algorithm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#certificate DnsRecord#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#digest DnsRecord#digest}
  */
  readonly digest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#digest_type DnsRecord#digest_type}
  */
  readonly digestType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#email_address DnsRecord#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#expiration DnsRecord#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#expiry DnsRecord#expiry}
  */
  readonly expiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#fingerprint DnsRecord#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#fingerprint_type DnsRecord#fingerprint_type}
  */
  readonly fingerprintType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#flags DnsRecord#flags}
  */
  readonly flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#flagsnaptr DnsRecord#flagsnaptr}
  */
  readonly flagsnaptr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#hardware DnsRecord#hardware}
  */
  readonly hardware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#id DnsRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#inception DnsRecord#inception}
  */
  readonly inception?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#iterations DnsRecord#iterations}
  */
  readonly iterations?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#key DnsRecord#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#keytag DnsRecord#keytag}
  */
  readonly keytag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#labels DnsRecord#labels}
  */
  readonly labels?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#mailbox DnsRecord#mailbox}
  */
  readonly mailbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#match_type DnsRecord#match_type}
  */
  readonly matchType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#name DnsRecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#name_server DnsRecord#name_server}
  */
  readonly nameServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#next_hashed_owner_name DnsRecord#next_hashed_owner_name}
  */
  readonly nextHashedOwnerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#nxdomain_ttl DnsRecord#nxdomain_ttl}
  */
  readonly nxdomainTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#order DnsRecord#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#original_ttl DnsRecord#original_ttl}
  */
  readonly originalTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#port DnsRecord#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#preference DnsRecord#preference}
  */
  readonly preference?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#priority DnsRecord#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#priority_increment DnsRecord#priority_increment}
  */
  readonly priorityIncrement?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#protocol DnsRecord#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#recordtype DnsRecord#recordtype}
  */
  readonly recordtype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#refresh DnsRecord#refresh}
  */
  readonly refresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#regexp DnsRecord#regexp}
  */
  readonly regexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#replacement DnsRecord#replacement}
  */
  readonly replacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#retry DnsRecord#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#salt DnsRecord#salt}
  */
  readonly salt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#selector DnsRecord#selector}
  */
  readonly selector?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#service DnsRecord#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#signature DnsRecord#signature}
  */
  readonly signature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#signer DnsRecord#signer}
  */
  readonly signer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#software DnsRecord#software}
  */
  readonly softwareAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#subtype DnsRecord#subtype}
  */
  readonly subtype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#svc_params DnsRecord#svc_params}
  */
  readonly svcParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#svc_priority DnsRecord#svc_priority}
  */
  readonly svcPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#target DnsRecord#target}
  */
  readonly target?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#target_name DnsRecord#target_name}
  */
  readonly targetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#ttl DnsRecord#ttl}
  */
  readonly ttl: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#txt DnsRecord#txt}
  */
  readonly txt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#type_bitmaps DnsRecord#type_bitmaps}
  */
  readonly typeBitmaps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#type_covered DnsRecord#type_covered}
  */
  readonly typeCovered?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#type_mnemonic DnsRecord#type_mnemonic}
  */
  readonly typeMnemonic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#type_value DnsRecord#type_value}
  */
  readonly typeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#usage DnsRecord#usage}
  */
  readonly usage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#weight DnsRecord#weight}
  */
  readonly weight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#zone DnsRecord#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record akamai_dns_record}
*/
export class DnsRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_dns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsRecord to import
  * @param importFromId The id of the existing DnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_dns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/dns_record akamai_dns_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_dns_record',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._certificate = config.certificate;
    this._digest = config.digest;
    this._digestType = config.digestType;
    this._emailAddress = config.emailAddress;
    this._expiration = config.expiration;
    this._expiry = config.expiry;
    this._fingerprint = config.fingerprint;
    this._fingerprintType = config.fingerprintType;
    this._flags = config.flags;
    this._flagsnaptr = config.flagsnaptr;
    this._hardware = config.hardware;
    this._id = config.id;
    this._inception = config.inception;
    this._iterations = config.iterations;
    this._key = config.key;
    this._keytag = config.keytag;
    this._labels = config.labels;
    this._mailbox = config.mailbox;
    this._matchType = config.matchType;
    this._name = config.name;
    this._nameServer = config.nameServer;
    this._nextHashedOwnerName = config.nextHashedOwnerName;
    this._nxdomainTtl = config.nxdomainTtl;
    this._order = config.order;
    this._originalTtl = config.originalTtl;
    this._port = config.port;
    this._preference = config.preference;
    this._priority = config.priority;
    this._priorityIncrement = config.priorityIncrement;
    this._protocol = config.protocol;
    this._recordtype = config.recordtype;
    this._refresh = config.refresh;
    this._regexp = config.regexp;
    this._replacement = config.replacement;
    this._retry = config.retry;
    this._salt = config.salt;
    this._selector = config.selector;
    this._service = config.service;
    this._signature = config.signature;
    this._signer = config.signer;
    this._software = config.softwareAttribute;
    this._subtype = config.subtype;
    this._svcParams = config.svcParams;
    this._svcPriority = config.svcPriority;
    this._target = config.target;
    this._targetName = config.targetName;
    this._ttl = config.ttl;
    this._txt = config.txt;
    this._typeBitmaps = config.typeBitmaps;
    this._typeCovered = config.typeCovered;
    this._typeMnemonic = config.typeMnemonic;
    this._typeValue = config.typeValue;
    this._usage = config.usage;
    this._weight = config.weight;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: number; 
  public get algorithm() {
    return this.getNumberAttribute('algorithm');
  }
  public set algorithm(value: number) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // answer_type - computed: true, optional: false, required: false
  public get answerType() {
    return this.getStringAttribute('answer_type');
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // digest_type - computed: false, optional: true, required: false
  private _digestType?: number; 
  public get digestType() {
    return this.getNumberAttribute('digest_type');
  }
  public set digestType(value: number) {
    this._digestType = value;
  }
  public resetDigestType() {
    this._digestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestTypeInput() {
    return this._digestType;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry?: number; 
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }
  public set expiry(value: number) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // fingerprint_type - computed: false, optional: true, required: false
  private _fingerprintType?: number; 
  public get fingerprintType() {
    return this.getNumberAttribute('fingerprint_type');
  }
  public set fingerprintType(value: number) {
    this._fingerprintType = value;
  }
  public resetFingerprintType() {
    this._fingerprintType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintTypeInput() {
    return this._fingerprintType;
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: number; 
  public get flags() {
    return this.getNumberAttribute('flags');
  }
  public set flags(value: number) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // flagsnaptr - computed: false, optional: true, required: false
  private _flagsnaptr?: string; 
  public get flagsnaptr() {
    return this.getStringAttribute('flagsnaptr');
  }
  public set flagsnaptr(value: string) {
    this._flagsnaptr = value;
  }
  public resetFlagsnaptr() {
    this._flagsnaptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsnaptrInput() {
    return this._flagsnaptr;
  }

  // hardware - computed: false, optional: true, required: false
  private _hardware?: string; 
  public get hardware() {
    return this.getStringAttribute('hardware');
  }
  public set hardware(value: string) {
    this._hardware = value;
  }
  public resetHardware() {
    this._hardware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareInput() {
    return this._hardware;
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

  // inception - computed: false, optional: true, required: false
  private _inception?: string; 
  public get inception() {
    return this.getStringAttribute('inception');
  }
  public set inception(value: string) {
    this._inception = value;
  }
  public resetInception() {
    this._inception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inceptionInput() {
    return this._inception;
  }

  // iterations - computed: false, optional: true, required: false
  private _iterations?: number; 
  public get iterations() {
    return this.getNumberAttribute('iterations');
  }
  public set iterations(value: number) {
    this._iterations = value;
  }
  public resetIterations() {
    this._iterations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iterationsInput() {
    return this._iterations;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // keytag - computed: false, optional: true, required: false
  private _keytag?: number; 
  public get keytag() {
    return this.getNumberAttribute('keytag');
  }
  public set keytag(value: number) {
    this._keytag = value;
  }
  public resetKeytag() {
    this._keytag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keytagInput() {
    return this._keytag;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: number; 
  public get labels() {
    return this.getNumberAttribute('labels');
  }
  public set labels(value: number) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // mailbox - computed: false, optional: true, required: false
  private _mailbox?: string; 
  public get mailbox() {
    return this.getStringAttribute('mailbox');
  }
  public set mailbox(value: string) {
    this._mailbox = value;
  }
  public resetMailbox() {
    this._mailbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailboxInput() {
    return this._mailbox;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: number; 
  public get matchType() {
    return this.getNumberAttribute('match_type');
  }
  public set matchType(value: number) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // name_server - computed: false, optional: true, required: false
  private _nameServer?: string; 
  public get nameServer() {
    return this.getStringAttribute('name_server');
  }
  public set nameServer(value: string) {
    this._nameServer = value;
  }
  public resetNameServer() {
    this._nameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer;
  }

  // next_hashed_owner_name - computed: false, optional: true, required: false
  private _nextHashedOwnerName?: string; 
  public get nextHashedOwnerName() {
    return this.getStringAttribute('next_hashed_owner_name');
  }
  public set nextHashedOwnerName(value: string) {
    this._nextHashedOwnerName = value;
  }
  public resetNextHashedOwnerName() {
    this._nextHashedOwnerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHashedOwnerNameInput() {
    return this._nextHashedOwnerName;
  }

  // nxdomain_ttl - computed: false, optional: true, required: false
  private _nxdomainTtl?: number; 
  public get nxdomainTtl() {
    return this.getNumberAttribute('nxdomain_ttl');
  }
  public set nxdomainTtl(value: number) {
    this._nxdomainTtl = value;
  }
  public resetNxdomainTtl() {
    this._nxdomainTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainTtlInput() {
    return this._nxdomainTtl;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // original_ttl - computed: false, optional: true, required: false
  private _originalTtl?: number; 
  public get originalTtl() {
    return this.getNumberAttribute('original_ttl');
  }
  public set originalTtl(value: number) {
    this._originalTtl = value;
  }
  public resetOriginalTtl() {
    this._originalTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalTtlInput() {
    return this._originalTtl;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_increment - computed: false, optional: true, required: false
  private _priorityIncrement?: number; 
  public get priorityIncrement() {
    return this.getNumberAttribute('priority_increment');
  }
  public set priorityIncrement(value: number) {
    this._priorityIncrement = value;
  }
  public resetPriorityIncrement() {
    this._priorityIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityIncrementInput() {
    return this._priorityIncrement;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // record_sha - computed: true, optional: false, required: false
  public get recordSha() {
    return this.getStringAttribute('record_sha');
  }

  // recordtype - computed: false, optional: false, required: true
  private _recordtype?: string; 
  public get recordtype() {
    return this.getStringAttribute('recordtype');
  }
  public set recordtype(value: string) {
    this._recordtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordtypeInput() {
    return this._recordtype;
  }

  // refresh - computed: false, optional: true, required: false
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // salt - computed: false, optional: true, required: false
  private _salt?: string; 
  public get salt() {
    return this.getStringAttribute('salt');
  }
  public set salt(value: string) {
    this._salt = value;
  }
  public resetSalt() {
    this._salt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltInput() {
    return this._salt;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: number; 
  public get selector() {
    return this.getNumberAttribute('selector');
  }
  public set selector(value: number) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getNumberAttribute('serial');
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // signature - computed: false, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // signer - computed: false, optional: true, required: false
  private _signer?: string; 
  public get signer() {
    return this.getStringAttribute('signer');
  }
  public set signer(value: string) {
    this._signer = value;
  }
  public resetSigner() {
    this._signer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerInput() {
    return this._signer;
  }

  // software - computed: false, optional: true, required: false
  private _software?: string; 
  public get softwareAttribute() {
    return this.getStringAttribute('software');
  }
  public set softwareAttribute(value: string) {
    this._software = value;
  }
  public resetSoftwareAttribute() {
    this._software = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAttributeInput() {
    return this._software;
  }

  // subtype - computed: false, optional: true, required: false
  private _subtype?: number; 
  public get subtype() {
    return this.getNumberAttribute('subtype');
  }
  public set subtype(value: number) {
    this._subtype = value;
  }
  public resetSubtype() {
    this._subtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype;
  }

  // svc_params - computed: false, optional: true, required: false
  private _svcParams?: string; 
  public get svcParams() {
    return this.getStringAttribute('svc_params');
  }
  public set svcParams(value: string) {
    this._svcParams = value;
  }
  public resetSvcParams() {
    this._svcParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svcParamsInput() {
    return this._svcParams;
  }

  // svc_priority - computed: false, optional: true, required: false
  private _svcPriority?: number; 
  public get svcPriority() {
    return this.getNumberAttribute('svc_priority');
  }
  public set svcPriority(value: number) {
    this._svcPriority = value;
  }
  public resetSvcPriority() {
    this._svcPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svcPriorityInput() {
    return this._svcPriority;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string[]; 
  public get target() {
    return this.getListAttribute('target');
  }
  public set target(value: string[]) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // txt - computed: false, optional: true, required: false
  private _txt?: string; 
  public get txt() {
    return this.getStringAttribute('txt');
  }
  public set txt(value: string) {
    this._txt = value;
  }
  public resetTxt() {
    this._txt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtInput() {
    return this._txt;
  }

  // type_bitmaps - computed: false, optional: true, required: false
  private _typeBitmaps?: string; 
  public get typeBitmaps() {
    return this.getStringAttribute('type_bitmaps');
  }
  public set typeBitmaps(value: string) {
    this._typeBitmaps = value;
  }
  public resetTypeBitmaps() {
    this._typeBitmaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeBitmapsInput() {
    return this._typeBitmaps;
  }

  // type_covered - computed: false, optional: true, required: false
  private _typeCovered?: string; 
  public get typeCovered() {
    return this.getStringAttribute('type_covered');
  }
  public set typeCovered(value: string) {
    this._typeCovered = value;
  }
  public resetTypeCovered() {
    this._typeCovered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCoveredInput() {
    return this._typeCovered;
  }

  // type_mnemonic - computed: false, optional: true, required: false
  private _typeMnemonic?: string; 
  public get typeMnemonic() {
    return this.getStringAttribute('type_mnemonic');
  }
  public set typeMnemonic(value: string) {
    this._typeMnemonic = value;
  }
  public resetTypeMnemonic() {
    this._typeMnemonic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeMnemonicInput() {
    return this._typeMnemonic;
  }

  // type_value - computed: false, optional: true, required: false
  private _typeValue?: number; 
  public get typeValue() {
    return this.getNumberAttribute('type_value');
  }
  public set typeValue(value: number) {
    this._typeValue = value;
  }
  public resetTypeValue() {
    this._typeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeValueInput() {
    return this._typeValue;
  }

  // usage - computed: false, optional: true, required: false
  private _usage?: number; 
  public get usage() {
    return this.getNumberAttribute('usage');
  }
  public set usage(value: number) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.numberToTerraform(this._algorithm),
      certificate: cdktf.stringToTerraform(this._certificate),
      digest: cdktf.stringToTerraform(this._digest),
      digest_type: cdktf.numberToTerraform(this._digestType),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      expiration: cdktf.stringToTerraform(this._expiration),
      expiry: cdktf.numberToTerraform(this._expiry),
      fingerprint: cdktf.stringToTerraform(this._fingerprint),
      fingerprint_type: cdktf.numberToTerraform(this._fingerprintType),
      flags: cdktf.numberToTerraform(this._flags),
      flagsnaptr: cdktf.stringToTerraform(this._flagsnaptr),
      hardware: cdktf.stringToTerraform(this._hardware),
      id: cdktf.stringToTerraform(this._id),
      inception: cdktf.stringToTerraform(this._inception),
      iterations: cdktf.numberToTerraform(this._iterations),
      key: cdktf.stringToTerraform(this._key),
      keytag: cdktf.numberToTerraform(this._keytag),
      labels: cdktf.numberToTerraform(this._labels),
      mailbox: cdktf.stringToTerraform(this._mailbox),
      match_type: cdktf.numberToTerraform(this._matchType),
      name: cdktf.stringToTerraform(this._name),
      name_server: cdktf.stringToTerraform(this._nameServer),
      next_hashed_owner_name: cdktf.stringToTerraform(this._nextHashedOwnerName),
      nxdomain_ttl: cdktf.numberToTerraform(this._nxdomainTtl),
      order: cdktf.numberToTerraform(this._order),
      original_ttl: cdktf.numberToTerraform(this._originalTtl),
      port: cdktf.numberToTerraform(this._port),
      preference: cdktf.numberToTerraform(this._preference),
      priority: cdktf.numberToTerraform(this._priority),
      priority_increment: cdktf.numberToTerraform(this._priorityIncrement),
      protocol: cdktf.numberToTerraform(this._protocol),
      recordtype: cdktf.stringToTerraform(this._recordtype),
      refresh: cdktf.numberToTerraform(this._refresh),
      regexp: cdktf.stringToTerraform(this._regexp),
      replacement: cdktf.stringToTerraform(this._replacement),
      retry: cdktf.numberToTerraform(this._retry),
      salt: cdktf.stringToTerraform(this._salt),
      selector: cdktf.numberToTerraform(this._selector),
      service: cdktf.stringToTerraform(this._service),
      signature: cdktf.stringToTerraform(this._signature),
      signer: cdktf.stringToTerraform(this._signer),
      software: cdktf.stringToTerraform(this._software),
      subtype: cdktf.numberToTerraform(this._subtype),
      svc_params: cdktf.stringToTerraform(this._svcParams),
      svc_priority: cdktf.numberToTerraform(this._svcPriority),
      target: cdktf.listMapper(cdktf.stringToTerraform, false)(this._target),
      target_name: cdktf.stringToTerraform(this._targetName),
      ttl: cdktf.numberToTerraform(this._ttl),
      txt: cdktf.stringToTerraform(this._txt),
      type_bitmaps: cdktf.stringToTerraform(this._typeBitmaps),
      type_covered: cdktf.stringToTerraform(this._typeCovered),
      type_mnemonic: cdktf.stringToTerraform(this._typeMnemonic),
      type_value: cdktf.numberToTerraform(this._typeValue),
      usage: cdktf.numberToTerraform(this._usage),
      weight: cdktf.numberToTerraform(this._weight),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.numberToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest: {
        value: cdktf.stringToHclTerraform(this._digest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest_type: {
        value: cdktf.numberToHclTerraform(this._digestType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration: {
        value: cdktf.stringToHclTerraform(this._expiration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry: {
        value: cdktf.numberToHclTerraform(this._expiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fingerprint: {
        value: cdktf.stringToHclTerraform(this._fingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fingerprint_type: {
        value: cdktf.numberToHclTerraform(this._fingerprintType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flags: {
        value: cdktf.numberToHclTerraform(this._flags),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flagsnaptr: {
        value: cdktf.stringToHclTerraform(this._flagsnaptr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardware: {
        value: cdktf.stringToHclTerraform(this._hardware),
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
      inception: {
        value: cdktf.stringToHclTerraform(this._inception),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iterations: {
        value: cdktf.numberToHclTerraform(this._iterations),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keytag: {
        value: cdktf.numberToHclTerraform(this._keytag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktf.numberToHclTerraform(this._labels),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mailbox: {
        value: cdktf.stringToHclTerraform(this._mailbox),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_type: {
        value: cdktf.numberToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_server: {
        value: cdktf.stringToHclTerraform(this._nameServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hashed_owner_name: {
        value: cdktf.stringToHclTerraform(this._nextHashedOwnerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxdomain_ttl: {
        value: cdktf.numberToHclTerraform(this._nxdomainTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      original_ttl: {
        value: cdktf.numberToHclTerraform(this._originalTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preference: {
        value: cdktf.numberToHclTerraform(this._preference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority_increment: {
        value: cdktf.numberToHclTerraform(this._priorityIncrement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recordtype: {
        value: cdktf.stringToHclTerraform(this._recordtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh: {
        value: cdktf.numberToHclTerraform(this._refresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      regexp: {
        value: cdktf.stringToHclTerraform(this._regexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacement: {
        value: cdktf.stringToHclTerraform(this._replacement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      salt: {
        value: cdktf.stringToHclTerraform(this._salt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selector: {
        value: cdktf.numberToHclTerraform(this._selector),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature: {
        value: cdktf.stringToHclTerraform(this._signature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signer: {
        value: cdktf.stringToHclTerraform(this._signer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software: {
        value: cdktf.stringToHclTerraform(this._software),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subtype: {
        value: cdktf.numberToHclTerraform(this._subtype),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      svc_params: {
        value: cdktf.stringToHclTerraform(this._svcParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svc_priority: {
        value: cdktf.numberToHclTerraform(this._svcPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._target),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      txt: {
        value: cdktf.stringToHclTerraform(this._txt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_bitmaps: {
        value: cdktf.stringToHclTerraform(this._typeBitmaps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_covered: {
        value: cdktf.stringToHclTerraform(this._typeCovered),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_mnemonic: {
        value: cdktf.stringToHclTerraform(this._typeMnemonic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_value: {
        value: cdktf.numberToHclTerraform(this._typeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      usage: {
        value: cdktf.numberToHclTerraform(this._usage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
